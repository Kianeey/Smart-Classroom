import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    default: "zxcvbn",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
const Student =
  mongoose.models.Student ||
  mongoose.model("Student", studentSchema, "students");

export default Student;
