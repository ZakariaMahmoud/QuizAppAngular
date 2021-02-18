import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  quiz_name: any;
  name_of_quiz: string = '';

  constructor(
    private shared: SharedService,
    private router: Router,
    private _Activatedroute: ActivatedRoute
  ) {
    this.shared.quiz.name = this._Activatedroute.snapshot.paramMap.get(
      'quiz_name'
    );
  }
  ngOnInit(): void {}

  setNameUser(name: string) {
    if (name) {
      this.shared.user.name = name;
      $('#name').attr('style', '');
      this.router.navigate([this.shared.quiz.name]);
    } else {
      $('#name').attr('style', 'border:2px solid red;');
    }
  }
}
