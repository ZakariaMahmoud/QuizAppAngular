export class User {

  private _name: string = "";
  private _result :number = 0;

  constructor() {}

  public set name(name: string) {
    this._name=name;
  }

  public get name(): string {
    return this._name;
  }

  public get result(): number {
    return this._result;
  }

  public set result(r: number) {
    this._result = r;

  }

}
