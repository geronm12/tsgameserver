type Captures = {
  id: number;
  url: string;
};

enum GType {
  rol = 1,
  action = 2,
  aaa = 3,
  soulslike = 4,
  metroidvania = 5,
}

interface IGame {
  title: string;
  release_date: Date;
  description: string;
  gType: GType;
  captures: Captures[]; //url of captures
}

export { GType, IGame };

export default class Game implements IGame {
  private _title: string;
  private _release_date: Date;
  private _description: string;
  private _gType: GType;
  private _captures: Captures[];

  constructor(
    title: string,
    release_date: Date,
    description: string,
    gType: GType,
    captures: Captures[]
  ) {
    this._title = title;
    this._release_date = release_date;
    this._description = description;
    this._gType = gType;
    this._captures = captures || [];
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get release_date(): Date {
    return this._release_date;
  }

  set release_date(release_date: Date) {
    this._release_date = release_date;
  }

  get description(): string {
    return this._description;
  }

  set description(description: string) {
    this.description = description;
  }

  get gType(): GType {
    return this._gType;
  }

  set gType(gType: GType) {
    this.gType = gType;
  }

  get captures(): Array<Captures> {
    return this._captures;
  }

  set captures(captures: Array<Captures>) {
    this._captures = captures;
  }
}
