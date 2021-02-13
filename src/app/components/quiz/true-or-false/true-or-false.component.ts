import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-true-or-false',
  templateUrl: './true-or-false.component.html',
  styleUrls: ['./true-or-false.component.scss']
})
export class TrueOrFalseComponent implements OnInit {
  active: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
