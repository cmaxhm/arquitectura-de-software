import { Express } from "express";
import { userRouter } from "./modules/user/user.router";

export const mainRouter = (app: Express): void => {
  app.use('/users', userRouter);
};
