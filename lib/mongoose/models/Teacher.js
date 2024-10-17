import mongoose, { Schema } from "mongoose";

const teacherSchema = new Schema({
  firstName: String,
  lastName: String,
  middleName: String,
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    default: "asdfgh",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
const Teacher =
  mongoose.models.Teacher ||
  mongoose.model("Teacher", teacherSchema, "teachers");

export default Teacher;
