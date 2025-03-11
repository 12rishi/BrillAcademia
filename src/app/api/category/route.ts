import connectDb from "@/database/connection";
import { addCart, getCart } from "./category.controller";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  await connectDb();
  return addCart(req);
}
export async function GET() {
  await connectDb();
  return getCart();
}
