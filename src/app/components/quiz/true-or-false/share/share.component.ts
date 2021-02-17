import { Component, OnInit } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/database';

import { SharedService } from 'src/app/shared/shared.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {
  state: number = -1;
  name_of_quiz: string = 'صواب أم خطأ';

  user_id: string = this._Activatedroute.snapshot.paramMap.get('user_id');
  user_name: any = '';
  user_responses: any[] = [];

  user: Object;

  visitor_name: string;
  score: number = 0;

  score_list = [];

  questions: any = [];
  i: number = 0;
  active: number = 0;

  constructor(
    private shared: SharedService,
    private router: Router,
    public db: AngularFireDatabase,
    private _Activatedroute: ActivatedRoute
  ) {
    if (this.user_id) {
      db.list('users/' + this.user_id)
        .valueChanges()
        .subscribe((user) => {
          if (Object.keys(user).length === 0) {
            router.navigate(['user-not-found']);
          } else {
            this.state = 0;
            this.user = user;
            this.user_name = user[0];
            this.user_responses.push(user[1]);
            this.user_responses = this.user_responses[0].true_or_false;
            if (
              typeof this.user[2] != 'undefined' &&
              typeof this.user[2].true_or_false != 'undefined'
            ) {
              this.score_list = this.user[2].true_or_false;

              this.score_list.sort((a, b) => (a.score <= b.score ? 1 : -1));
            }
          }
        });

      db.list('questions/QuestionsForVisitor')
        .valueChanges()
        .subscribe((questions) => {
          this.questions = questions[0];
          for (let i = 0; i < this.questions.length; i++) {
            this.questions[i] = this.questions[i].replace('$', this.user_name);
          }
        });
    }
  }

  ngOnInit(): void {}

  setNameVisitor(name: string) {
    if (name) {
      this.visitor_name = name;
      $('#name').attr('style', '');
      ++this.state;
    } else {
      $('#name').attr('style', 'border:2px solid red;');
    }
  }

  setTrue() {
    if (this.i < this.questions.length) {
      if (this.user_responses[this.i] == true) {
        this.score++;
      }
      this.i++;
    }

    if (this.i >= this.questions.length) {
      this.push();
    }
  }

  setFalse() {
    if (this.i < this.questions.length) {
      if (this.user_responses[this.i] == false) {
        this.score++;
      }
      this.i++;
    }

    if (this.i >= this.questions.length) {
      this.push();
    }
  }

  push() {
    this.db
      .list('users/' + this.user_id)
      .valueChanges()
      .subscribe((user) => {
        this.user = user;
        if (
          typeof this.user[2] != 'undefined' &&
          typeof this.user[2].true_or_false != 'undefined'
        ) {
          this.score_list = this.user[2].true_or_false;

          this.score_list.sort((a, b) => (a.score <= b.score ? 1 : -1));
        }
      });

    let visitor = {
      name: this.visitor_name,
      score: this.score,
    };
    var visitor_id = '';

    if (
      typeof this.user[2] == 'undefined' ||
      typeof this.user[2].true_or_false == 'undefined'
    ) {
      visitor_id = '0';
    } else {
      visitor_id = Object.keys(this.user[2].true_or_false).length.toString();
    }

    this.db
      .list('users/' + this.user_id + '/visitors/true_or_false')
      .set(visitor_id, visitor)
      .then(() => {
        console.log('Good');
      });
  }
}
