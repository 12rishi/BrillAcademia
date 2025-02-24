import mongoose from "mongoose";

const dbString = process.env.DB_STRING;
if (!dbString) {
  throw new Error("please provide the connection string");
}
const connectDb = async () => {
  if (mongoose.connection.readyState) {
    console.log("db already connected");
    return;
  }
  try {
    await mongoose.connect(dbString);
    console.log("successfully connected to db...😄");
  } catch (error: any) {
    console.error("error occured...😭", error?.message);
  }
};
export default connectDb;
