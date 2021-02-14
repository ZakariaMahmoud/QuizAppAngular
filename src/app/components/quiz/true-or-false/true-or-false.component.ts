import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-true-or-false',
  templateUrl: './true-or-false.component.html',
  styleUrls: ['./true-or-false.component.scss']
})
export class TrueOrFalseComponent implements OnInit {
  active: number = 0;
  questions: any[] = [];
  responses: any[] = [];
  i: number = 0;
  constructor(db: AngularFireDatabase) {
    db.list('/quiz/TrueOrFalse/questions')
      .valueChanges()
      .subscribe(questions => {
        this.questions = questions;

      })
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
      this.calculateResults();
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
      this.calculateResults();
    }
  }

  calculateResults() {

    console.log(this.responses)
  }

}
