import express, { Router, Request, Response, NextFunction } from "express";
import Game, { GType } from "../types/game";

const router: Router = express.Router();

router.get("/games", (req: Request, res: Response, next: NextFunction) => {
  return res.json({
    game: new Game(
      "horizon forbidden west",
      new Date(),
      "el mejor juego de ps5 generacional",
      GType.aaa,
      [
        { id: 1, url: "foto1" },
        { id: 2, url: "foto2" },
        { id: 3, url: "foto3" },
        { id: 4, url: "foto4" },
      ]
    ),
  });
});

export { router };
