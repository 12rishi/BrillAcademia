import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  courseDuration: {
    type: String,
  },
  courseName: {
    type: String,
  },
  coursePrice: {
    type: String,
  },
  courseDescription: {
    type: String,
  },
});
const Course = mongoose.model("Course", courseSchema);
export default Course;
