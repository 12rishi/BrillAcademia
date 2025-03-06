import mongoose, { Schema, Document, model } from "mongoose";

interface ILesson extends Document {
  course: mongoose.Types.ObjectId;
  title: string;
  description: string;
  videoUrl: string;
  createdAt: Date;
}

const lessonSchema: Schema = new Schema({
  course: { type: Schema.Types.ObjectId, ref: "Course" },
  title: { type: String, required: true },
  description: { type: String, required: true },
  videoUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Lesson = mongoose.models.Lesson || model<ILesson>("Lesson", lessonSchema);

export default Lesson;
