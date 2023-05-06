import { Schema, model } from "mongoose";
import { IGame } from "../types/game";

const gameSchema: Schema = new Schema<IGame>({
  title: {
    required: true,
    type: String,
  },
  release_date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: true,
  },
  gType: {
    type: Number,
    enum: ["rol", "action", "aaa", "soulslike", "metroidvania"],
    required: true,
  },
  captures: [
    {
      id: Number,
      url: String,
    },
  ],
});

const Game = model<IGame>("Game", gameSchema);

export default Game;
