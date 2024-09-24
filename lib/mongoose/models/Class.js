import mongoose, { Schema } from "mongoose";

const classSchema = new Schema({
  classroom: String,
  subject: {
    type: String,
  },
  teacher: {
    type: String,
  },
  time: {
    type: String,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Students",
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
