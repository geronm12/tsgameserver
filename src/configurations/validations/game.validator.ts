import { Request, Response, NextFunction } from "express";
import ApiResponseError from "../responses/api.response.error";

function AddGameValidation(
  req: Request,
  res: Response,
  next: NextFunction
): Response<ApiResponseError, Record<string, ApiResponseError>> | void {
  const { title } = req.body;

  if (!title) {
    return res.json(new ApiResponseError("", false, 400));
  }

  next();
}

function GetGamesValidation(req: Request, res: Response, next: NextFunction) {
  let { page } = req.query;
  let parsedPage: number = 0;

  if (!page) {
    throw Error("No loco");
  }

  parsedPage = parseInt(page.toString());

  if (isNaN(parsedPage)) {
    throw Error("Loco la página no puede ser cualquier cosa");
  }

  if (!Number.isInteger(parsedPage)) {
    throw Error("Envia enteros amigo, cansado me tenes");
  }

  next();
}

function GetGamesByIdValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  if (!id) {
    throw new Error("El id es obligatorio");
  }

  next();
}

export { AddGameValidation, GetGamesValidation, GetGamesByIdValidation };
