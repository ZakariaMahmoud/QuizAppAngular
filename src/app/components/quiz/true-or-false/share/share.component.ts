import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { SharedService } from 'src/app/shared/shared.service';
import { Router, ActivatedRoute } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {
  state: number = -1;
  href: string;
  name_of_quiz: string = 'صحيح أم خطأ';

  user_id: string = this._Activatedroute.snapshot.paramMap.get('user_id');
  user_name: any = '';
  user_responses: any[] = [];

  user: Object;

  visitor_name: string;
  score: number = 0;
  score_percentage: string;

  score_list = [];

  questions: any = [];
  i: number = 0;
  active: number = 0;

  title: string;

  constructor(
    private shared: SharedService,
    private router: Router,
    public db: AngularFireDatabase,
    private _Activatedroute: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {
    if (this.user_id) {
      db.list('users/' + this.user_id)
        .valueChanges()
        .subscribe((user) => {
          if (Object.keys(user).length === 0) {
            router.navigate(['user-not-found']);
          } else {
            if (this.getCookie('true-or-false/' + this.user_id)) {
              this.score = parseInt(
                this.getCookie('true-or-false/' + this.user_id)
              );
              this.showSpinner(2000);
              this.state = 2;
            } else if (
              this.getCookie('true-or-false/user_id') == this.user_id
            ) {
              this.showSpinner(2000);
              this.state = 3;
            } else {
              this.showSpinner(2000);
              this.state = 0;
            }

            this.user = user;
            this.user_name = user[0];
            this.title =
              '💪 أرسل لك 💪' +
              this.user_name +
              '  🤛 تحدي صحيح أم خطأ ' +
              '🤜 إبدأ التحدي اﻵن   ';

            if (
              typeof this.user[1] != 'undefined' &&
              typeof this.user[1].true_or_false != 'undefined'
            ) {
              this.user_responses = [];
              this.user_responses.push(user[1]);
              this.user_responses = this.user_responses[0].true_or_false;
            }
            if (
              typeof this.user[2] != 'undefined' &&
              typeof this.user[2].true_or_false != 'undefined'
            ) {
              this.score_list = this.user[2].true_or_false;

              this.score_list.sort((a, b) => (a.score <= b.score ? 1 : -1));
              if (this.score === 0) {
                this.score_percentage = '0';
              } else {
                this.score_percentage = (
                  (this.score / this.user[1].true_or_false.length || 10) * 100
                ).toFixed(1);
              }
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

  ngOnInit(): void {
    this.href = window.location.href;
    this.showSpinner(2000);
  }
  copy() {
    var link = document.getElementById('link') as HTMLInputElement;
    link.select();
    document.execCommand('copy');

    this.active = 1;
    setTimeout(() => (this.active = 0), 1000);
  }
  setNameVisitor(name: string) {
    if (name) {
      this.visitor_name = name;
      $('#name').attr('style', '');
      if (this.getCookie('true-or-false/' + this.user_id)) {
        this.state = 2;
      } else {
        this.state = 1;
      }
    } else {
      $('#name').attr('style', 'border:2px solid red;');
    }
  }

  setTrue() {
    if (this.i < this.questions.length) {
      if (this.user_responses[this.i] == true) {
        this.score++;
        this.active = 1;
        setTimeout(() => (this.active = 0), 500);
      } else {
        this.active = 2;
        setTimeout(() => (this.active = 0), 500);
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
        this.active = 3;
        setTimeout(() => (this.active = 0), 500);
      } else {
        this.active = 4;
        setTimeout(() => (this.active = 0), 500);
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
        this.setCookie('true-or-false/' + this.user_id, this.score, 30);
        this.state = 2;
      });
  }

  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }
  getCookie(cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  showSpinner(ms: number) {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }
}
