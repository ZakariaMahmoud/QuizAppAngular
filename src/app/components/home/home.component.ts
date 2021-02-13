import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(  private shared: SharedService,private router: Router) { }
  ngOnInit(): void {
  }
  pushName(val: string) {
    this.shared.user.name = val;
    this.router.navigate(['/quiz']);
  }
}
