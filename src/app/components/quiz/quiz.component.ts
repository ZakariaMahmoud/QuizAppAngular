import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  name: string = this.shared.user.name;
  id: number = 0;
  result: number = 0;

  allQuestions = [
    { "question": "npm uses the package.json to manage what dependencies our application has ?", "answer": true, "selected" : false },
    { "question": "True Or False", "answer": true, "selected": false},
    { "question": "True Or False", "answer": true, "selected": false},
    { "question": "True Or False", "answer": true, "selected": false},
    { "question": "True Or False", "answer": true, "selected": false},
    { "question": "True Or False", "answer" : true, "selected" :false},

  ];

  constructor(private shared: SharedService,private router: Router ) { }
  ngOnInit(): void {


  }

  setTrue() {
    if(this.id<this.allQuestions.length) {
      this.allQuestions[this.id]["selected"] = true;
        this.id++;
    }

    if(this.id >= this.allQuestions.length){
      this.calculateResults();
    }
  }
  setFalse() {
    if(this.id<this.allQuestions.length) {
        this.allQuestions[this.id]["selected"] = false;
        this.id++;
    }
    if(this.id >= this.allQuestions.length){
      this.calculateResults();
    }
  }

  calculateResults() {

      for (let i = 0; i < this.allQuestions.length; i++){

        if (this.allQuestions[i]["answer"] == this.allQuestions[i]["selected"]) {
          ++this.result;
        }
      }
    this.shared.user.result=this.result;
    this.router.navigate(['/result']);



  }

}
