import { Injectable } from '@angular/core';
import { User } from '../classes/user';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public user = new User();
  constructor() { }

  getUser() :User{ return this.user}

}
