import mongoose, { Schema } from "mongoose";

const classSchema = new Schema({
  classroom: String,
  subject: {
    type: String,
  },
  section: {
    type: String,
  },
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
  },
  day: {
    type: String,
  },
  students: [
    {
      default: [],
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
const Class =
  mongoose.models.Class || mongoose.model("Class", classSchema, "classes");

export default Class;




