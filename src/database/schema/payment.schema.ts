import mongoose, { Schema, Document, model } from "mongoose";

// Enum for payment status
enum PaymentStatus {
  Pending = "Pending",
  Completed = "Completed",
  Failed = "Failed",
}

// Interface for Payment
export interface IPayment extends Document {
  student: mongoose.Types.ObjectId;
  course: mongoose.Types.ObjectId;
  amount: number;
  status: PaymentStatus;
}

// Schema for Payment
const paymentSchema = new Schema<IPayment>(
  {
    student: { type: Schema.Types.ObjectId, ref: "Student", required: true },
    course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
    amount: { type: Number, required: true },
    status: {
      type: String,
      enum: Object.values(PaymentStatus),
      required: true,
      default: PaymentStatus.Pending,
    },
  },
  { timestamps: true }
);

export const Payment =
  mongoose.models.Payment || model<IPayment>("Payment", paymentSchema);
