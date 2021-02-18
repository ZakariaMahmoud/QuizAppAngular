import { AngularFireDatabase } from '@angular/fire/database';

export class User {
  private _name?: string;

  constructor() {}

  public set name(name: any) {
    sessionStorage.setItem('name', name);
  }

  public get name(): any {
    return sessionStorage.getItem('name');
  }

  public setResponses(quiz_name: string, responses: boolean[]) {}
}
