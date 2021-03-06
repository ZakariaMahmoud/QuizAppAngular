import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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
    public db: AngularFireDatabase,
    private spinner: NgxSpinnerService
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

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

  setTrue() {
    this.active = 1;
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
    this.active = 2;
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
      var unique_id = this.getCookie('true-or-false/user_id');
      this.db.list('users').update(unique_id, user);
      this.router.navigate(['true-or-false/share/' + unique_id]);
    } else {
      this.setCookie('true-or-false/user_id', unique_id, 30);
      this.db.list('users').update(unique_id, user);
      this.router.navigate(['true-or-false/share/' + unique_id]);
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
