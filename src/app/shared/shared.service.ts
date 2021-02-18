import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Quiz } from '../classes/quiz';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public user = new User();
  public quiz = new Quiz();

  constructor() {}

  getUser(): User {
    return this.user;
  }
}
