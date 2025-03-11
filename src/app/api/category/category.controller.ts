import connectDb from "@/database/connection";
import Category from "@/database/schema/category.schema";
import { authMiddleware } from "../../../../middleware/auth.middleware";
import { NextRequest } from "next/server";

export async function addCart(req: NextRequest) {
  try {
    authMiddleware(req)
    await connectDb();
    const { name, description } = (await req.json()) as {
      name?: string;
      description?: string;
    };
    console.log("data from request", name, description);
    if (!name) {
      return Response.json({ message: "Name is required" }, { status: 400 });
    }
    const alreadyExists = await Category.findOne({ name });
    if (alreadyExists) {
      return Response.json(
        { message: "Category already exists" },
        { status: 400 }
      );
    }
    await Category.create({ name, description });
    return Response.json(
      { message: "Category added successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: "error occured during " }, { status: 500 });
  }
}
export async function getCart() {
  try {
    const categories = await Category.find();
    if (categories.length === 0) {
      return Response.json({ message: "No categories found" }, { status: 404 });
    }
    return Response.json({ data: categories }, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "error occured while fetching categories " },
      { status: 500 }
    );
  }
}
