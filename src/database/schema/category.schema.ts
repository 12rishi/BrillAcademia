import mongoose, { model, Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Category = mongoose.models.Cart || model("Cart", categorySchema);
export default Category;
