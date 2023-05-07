import { Request, Response, NextFunction } from "express";
import ApiResponseErrorCreator from "../responses/api.response.error";

class SingletonManager {
  private static instance: ApiResponseErrorCreator;

  public static getInstance(): ApiResponseErrorCreator {
    if (!SingletonManager.instance) {
      SingletonManager.instance = new ApiResponseErrorCreator();
    }

    return SingletonManager.instance;
  }
}

function AddGameValidation(
  req: Request,
  res: Response,
  next: NextFunction
): Response<
  ApiResponseErrorCreator,
  Record<string, ApiResponseErrorCreator>
> | void {
  const { title } = req.body;
  const { setValues } = SingletonManager.getInstance();

  if (!title) {
    return res.json(setValues("El titulo es obligatorioi"));
  }

  next();
}

function GetGamesValidation(
  req: Request,
  res: Response,
  next: NextFunction
): Response<
  ApiResponseErrorCreator,
  Record<string, ApiResponseErrorCreator>
> | void {
  let { page } = req.query;
  let parsedPage: number = 0;
  const { setValues } = SingletonManager.getInstance();

  if (!page) {
    return res
      .status(400)
      .json(setValues("El querString 'page' es obligatorio."));
  }

  parsedPage = parseInt(page.toString());

  if (isNaN(parsedPage)) {
    return res
      .status(400)
      .json(setValues("El queryString 'page' debe ser un número"));
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
