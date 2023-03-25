import { Request } from "express";
import { Query } from "mongoose";
import { User, UserModel } from "./user.model";

export const getAllUsers = (): Query<User[], User> => {
  return UserModel.find<User>();
};

export const saveUser = (request: Request): Promise<User> => {
  const user = new UserModel({
    name: request.body.name,
    email: request.body.email,
    age: request.body.age
  });

  return user.save();
};

export const editUser = async (request: Request): Promise<User | null> => {
  return UserModel.findOneAndUpdate<User>({ _id: request.body._id }, { ...request.body });
};

export const deleteUser = async (request: Request): Promise<User | null> => {
  return UserModel.findOneAndDelete<User>({ _id: request.body._id });
};
