import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
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
const Admin =
  mongoose.models.Admin || mongoose.model("Admin", adminSchema, "admins");

export default Admin;
