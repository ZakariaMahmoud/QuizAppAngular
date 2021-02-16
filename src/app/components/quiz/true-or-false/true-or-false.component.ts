import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-true-or-false',
  templateUrl: './true-or-false.component.html',
  styleUrls: ['./true-or-false.component.scss']
})


export class TrueOrFalseComponent implements OnInit {


  active: number = 0;
  questions: any = [];
  responses: any[] = [];
  i: number = 0;
  constructor(private shared: SharedService,private router: Router,public db: AngularFireDatabase) {
    if (this.shared.user.name) {
      db.list('questions/QuestionsForUser').valueChanges().subscribe(questions => {
        this.questions = questions[0];
      })

    } else {
      this.router.navigate(['quiz/true-or-false']);
      }
  }

  ngOnInit(): void {



  }


  setTrue() {
    this.active = 2;
    setTimeout(() => this.active = 0, 500)

    if (this.i < this.questions.length) {
      this.responses.push(true);

        this.i++;
    }

    if(this.i >= this.questions.length) {
      this.push();
    }

  }

  setFalse() {
    this.active = 1;
    setTimeout(() => this.active = 0, 500)

     if (this.i < this.questions.length) {
       this.responses.push(false);
        this.i++;
    }

    if(this.i >= this.questions.length) {
      this.push();
    }
  }

  push() {






  }

}
