import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    default: "qwerty",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
const User =
  mongoose.models.User || mongoose.model("User", userSchema, "users");

export default User;
