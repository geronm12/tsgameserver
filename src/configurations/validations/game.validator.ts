import { Request, Response, NextFunction } from "express";
import ApiResponseError from "../responses/api.response.error";

export default function FunctionGameValidation(
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
