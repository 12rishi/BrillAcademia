import mongoose from "mongoose";
enum Role {
  Admin = "admin",
  Student = "student",
}
interface IUSer extends Document {
  userName: string;
  email: string;
  profilePicture: string;
  googleId: string;
  role: Role;
}

const userSchema = new mongoose.Schema<IUSer>({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: [Role.Admin, Role.Student],
    default: Role.Student,
  },
  profilePicture: {
    type: String,
  },
  googleId: {
    type: String,
    required: true,
  },
});
export const User = mongoose.models.User || mongoose.model("User", userSchema); //if User doesnot exist then only create User Schema
