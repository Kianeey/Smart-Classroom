import mongoose, { Schema } from "mongoose";

const classSchema = new Schema({
  classroom: String,
  subject: {
    type: String,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
  },
  time: {
    type: String,
  },
  students: [
    {
      default: [],
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  block: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
const Class =
  mongoose.models.Class || mongoose.model("Class", classSchema, "classes");

export default Class;
