import { Component, OnInit } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/database';

import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-true-or-false',
  templateUrl: './true-or-false.component.html',
  styleUrls: ['./true-or-false.component.scss'],
})
export class TrueOrFalseComponent implements OnInit {
  active: number = 0;
  questions: any = [];
  responses: any[] = [];
  i: number = 0;
  constructor(
    private shared: SharedService,
    private router: Router,
    public db: AngularFireDatabase
  ) {
    if (this.shared.user.name) {
      db.list('questions/QuestionsForUser')
        .valueChanges()
        .subscribe((questions) => {
          this.questions = questions[0];
        });
    } else {
      this.router.navigate(['quiz/true-or-false']);
    }
  }

  ngOnInit(): void {}

  setTrue() {
    this.active = 2;
    setTimeout(() => (this.active = 0), 500);

    if (this.i < this.questions.length) {
      this.responses.push(true);

      this.i++;
    }

    if (this.i >= this.questions.length) {
      this.push();
    }
  }

  setFalse() {
    this.active = 1;
    setTimeout(() => (this.active = 0), 500);

    if (this.i < this.questions.length) {
      this.responses.push(false);
      this.i++;
    }

    if (this.i >= this.questions.length) {
      this.push();
    }
  }

  push() {
    var user = {
      name: this.shared.user.name,
      quiz: {
        true_or_false: this.responses,
      },
    };

    var unique_id = Math.floor(
      Math.random() * Math.floor(Math.random() * Date.now())
    ).toString();

    if (this.getCookie('user_id')) {
      var unique_id = this.getCookie('user_id');
      this.db.list('users').update(unique_id, user);
    } else {
      this.setCookie('user_id', unique_id, 30);
      this.db.list('users').update(unique_id, user);
    }
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
}
