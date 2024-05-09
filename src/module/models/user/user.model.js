import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String },
});

export const UserModel = model("user", userSchema);
