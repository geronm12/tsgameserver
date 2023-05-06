import express, { Router } from "express";

import FunctionGameValidation from "../configurations/validations/game.validator";
import { AddGame, GetGameById, GetGames } from "../controllers/game.controller";

const router: Router = express.Router();

router.post("/games", [FunctionGameValidation], AddGame);
router.get("/games/:id", GetGameById);
router.get("/games", GetGames);

export { router };
