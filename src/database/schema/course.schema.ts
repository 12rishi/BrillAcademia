import mongoose, { Schema } from "mongoose";
interface ICourse extends Document {
  title: string;
  description: string;
  price: number;
  duration: string;
  category: mongoose.Types.ObjectId;
  lessons: mongoose.Types.ObjectId[];
  createdAt: Date;
}
const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  duration: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  lessons: [{ type: Schema.Types.ObjectId, ref: "Lesson" }], //Array of Lesson Ids
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Course =
  mongoose.models.Course || mongoose.model<ICourse>("Course", courseSchema);
export default Course;
