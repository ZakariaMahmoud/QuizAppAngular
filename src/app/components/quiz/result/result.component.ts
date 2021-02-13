import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  result: number = this.shared.user.result;

  constructor(private shared: SharedService) { }

  ngOnInit(): void {

  }

}
