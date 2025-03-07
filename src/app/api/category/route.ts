import connectDb from "@/database/connection";
import { addCart, getCart } from "./category.controller";

export async function POST(req: Request) {
  await connectDb();
  return addCart(req);
}
export async function GET() {
  await connectDb();
  return getCart();
}
