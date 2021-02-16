import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery'


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quiz_name: any;
  nameOfQuiz: string = "";


  constructor(private shared: SharedService, private router: Router, private _Activatedroute: ActivatedRoute) {

    this.quiz_name = this._Activatedroute.snapshot.paramMap.get("quiz_name");
    this.setNameOfQuiz(this.quiz_name);
   }
  ngOnInit(): void {


  }

  setNameUser(name: string) {
    if (name) {
      this.shared.user.name = name;
      $('#name').attr('style', '');
      this.router.navigate([this.quiz_name]);
    } else {
      $('#name').attr('style', 'border:2px solid red;');
    }

  }
  setNameOfQuiz(quiz_name: any) {
    switch (quiz_name) {
      case "true-or-false": {
        this.nameOfQuiz = "صواب أم خطأ";

        break;

      }
    }
  }

}
