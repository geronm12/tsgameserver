import Game from "../models/GameScheme";
import {
  ApiGameResponse,
  ApiGameResponseArray,
} from "../configurations/responses/api.game.responses";
import { Request, Response } from "express";

async function GetGameById(
  req: Request,
  res: Response
): Promise<ApiGameResponse> {
  //db call and try add new game
  return new ApiGameResponse("", true, 200, new Game());
}

async function GetGames(
  req: Request,
  res: Response
): Promise<ApiGameResponseArray> {
  return new ApiGameResponseArray("", true, 200, [new Game(), new Game()]);
}

async function AddGame(req: Request, res: Response): Promise<ApiGameResponse> {
  return new ApiGameResponse("", true, 200, new Game());
}

async function UpdateGame(
  req: Request,
  res: Response
): Promise<ApiGameResponse> {
  return new ApiGameResponse("", true, 200, new Game());
}

async function DeleteGame(
  req: Request,
  res: Response
): Promise<ApiGameResponse> {
  return new ApiGameResponse("", true, 200, new Game());
}

export { GetGames, GetGameById, AddGame, DeleteGame, UpdateGame };
