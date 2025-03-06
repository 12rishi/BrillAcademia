import mongoose, { Schema, model, Document } from "mongoose";

// TypeScript interface
export interface IEnroll extends Document {
  student: mongoose.Types.ObjectId;
  course: mongoose.Types.ObjectId;
  enrolledAt: Date;
}

// Mongoose schema
const EnrollSchema = new Schema<IEnroll>({
  student: { type: Schema.Types.ObjectId, ref: "Student", required: true },
  course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  enrolledAt: { type: Date, default: Date.now },
});

export const Enroll =
  mongoose.models.Enroll || model<IEnroll>("Enroll", EnrollSchema);
