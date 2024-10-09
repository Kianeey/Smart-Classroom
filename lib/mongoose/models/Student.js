import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema({
  firstName: String,
  lastName: String,
  middleName: String,
  student_id:String,
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
