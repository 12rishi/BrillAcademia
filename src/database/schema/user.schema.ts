import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
  },

  profilePicture: {
    type: String,
  },
  googleId: {
    type: String,
  },
});
export const User = mongoose.model("User", userSchema);
