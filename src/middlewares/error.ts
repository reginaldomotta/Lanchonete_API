import { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { AppError } from "../error/AppError";

export function error(error: Error, request: Request, response: Response, next: NextFunction) {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      error: error.message
    });
  }
  return response.status(500).json({
    status: "error",
    message: error.message
  });
}