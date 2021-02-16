import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable } from 'rxjs';

import { SharedService } from 'src/app/shared/shared.service';
import { ItemService } from 'src/app/shared/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-true-or-false',
  templateUrl: './true-or-false.component.html',
  styleUrls: ['./true-or-false.component.scss']
})


export class TrueOrFalseComponent implements OnInit {


  active: number = 0;
  questions: string[] = [];
  responses: any[] = [];
  i: number = 0;
  constructor(private shared: SharedService, private itemService: ItemService, private router: Router) {


  }

  ngOnInit(): void {
      if (this.shared.user.name) {


        this.itemService.items.subscribe(data => this.questions =data[0].true_or_false);



    } else {
      this.router.navigate(['quiz/true-or-false']);
      }
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
