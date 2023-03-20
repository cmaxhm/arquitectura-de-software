import { model, Model, Schema } from "mongoose";

export interface User {
  name: string;
  email: string;
  age: number;
}

const userSchema: Schema<User> = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true }
});

export const UserModel: Model<User> = model<User>('User', userSchema);
