import express, { Router } from "express";

import {
  AddGameValidation,
  GetGamesByIdValidation,
  GetGamesValidation,
} from "../configurations/validations/game.validator";
import { AddGame, GetGameById, GetGames } from "../controllers/game.controller";

const router: Router = express.Router();

router.post("/games", [AddGameValidation], AddGame);
router.get("/games/:id", [GetGamesByIdValidation], GetGameById);
router.get("/games", [GetGamesValidation], GetGames);

export { router };
