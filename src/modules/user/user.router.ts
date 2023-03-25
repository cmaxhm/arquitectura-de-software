import e, { Request, Response, Router } from "express";
import { errorResponse, successMessage } from "../../main.responses";
import { editUser, getAllUsers, saveUser } from "./user.controller";
import { User } from "./user.model";

export const userRouter: Router = e.Router();

userRouter.get('/', (request: Request, response: Response) => {
  getAllUsers()
    .then((result: User[]) => {
      response.json(result);
    })
    .catch(error => {
      errorResponse(response, error, 404);
    });
});

userRouter.post('/', (request: Request, response: Response) => {
  saveUser(request)
    .then((result: User) => {
      successMessage(response, result, 201, request.body);
    })
    .catch((error: Error) => {
      errorResponse(response, error, 406, request.body);
    });
});

userRouter.patch('/', (request: Request, response: Response) => {
  editUser(request)
    .then((result: User | null) => {
      successMessage(response, result, 200, request.body);
    })
    .catch((error: Error) => {
      errorResponse(response, error, 406, request.body);
    });
});

userRouter.delete('/', (request: Request, response: Response) => {
  //
});
