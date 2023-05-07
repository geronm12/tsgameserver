import { ObjectId } from "mongoose";

interface INote {
  title: string;
  text: string;
  finalNote: number;
  gameId: ObjectId;
}

export { INote };

export default class Note implements INote {
  private _title: string;
  private _text: string;
  private _finalNote: number;
  private _gameId: ObjectId;

  constructor(
    title: string,
    text: string,
    finalNote: number,
    gameId: ObjectId
  ) {
    this._title = title;
    this._text = text;
    this._finalNote = finalNote;
    this._gameId = gameId;
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get text(): string {
    return this._text;
  }

  set text(text: string) {
    this._text = text;
  }

  get finalNote(): number {
    return this._finalNote;
  }

  set finalNote(finalNote: number) {
    this._finalNote = finalNote;
  }

  get gameId(): ObjectId {
    return this._gameId;
  }

  set noteId(gameId: ObjectId) {
    this._gameId = gameId;
  }
}
