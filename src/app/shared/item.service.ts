import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { data } from 'jquery';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {



  items :Observable<Item[]>

  constructor(public db: AngularFirestore) {
  this.items = this.db.collection<Item>('Database')
         .snapshotChanges().pipe(
           map(actions => actions.map(a => {
             const data = a.payload.doc.data() as Item;
             const id = a.payload.doc.id;
             return { id,...data };
           }))
         );
  }

}

interface Item{


  true_or_false: Array<string>;

}
