import { authOption } from "@/app/api/auth/[...nextauth]/route";

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { Role } from "../types/type";

export const authMiddleware = async (req: NextRequest) => {
  try {
    const session = await getServerSession(authOption);
    if (!session || session.user.role !== Role.Admin) {
      return Response.json(
        { message: "please login for accessing the system" },
        { status: 401 }
      );
    }
    return NextResponse.next();
  } catch (error: unknown) {
    return Response.json(
      {
        message:
          error instanceof Error ? error.message : "something went wrong",
      },
      { status: 401 }
    );
  }
};
