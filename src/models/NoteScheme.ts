import { Schema, model } from "mongoose";
import { INote } from "../types/note";

const noteScheme: Schema = new Schema({
  title: String,
  text: String,
  finalNote: Number,
  gameId: {
    type: Schema.Types.ObjectId,
    ref: "Game",
  },
});

const Note = model<INote>("Note", noteScheme);
export default Note;
