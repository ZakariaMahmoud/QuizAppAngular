export class Quiz {
  private _name_ar: string;
  private _questions: string[];

  set name(name: string) {
    sessionStorage.setItem('quiz_name', name);
  }

  get name() {
    return sessionStorage.getItem('quiz_name');
  }

  get name_ar() {
    switch (sessionStorage.getItem('quiz_name')) {
      case 'true-or-false': {
        this._name_ar = 'صحيح أم خطأ';
        break;
      }
    }
    return this._name_ar;
  }

  set questions(questions: Array<string>) {
    this._questions = questions;
  }

  get questions() {
    return this._questions;
  }
}
