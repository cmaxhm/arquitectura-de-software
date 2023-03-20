import { Response } from "express";

export const errorResponse = (response: Response, error: Error, status: number = 403, body?: any): void => {
  response.status(status).send({
    message: error.message,
    body
  });
};

export const successMessage = (response: Response, result: any, status: number = 200, body?: any): void => {
  response.status(status).send({
    result,
    body
  });
};
