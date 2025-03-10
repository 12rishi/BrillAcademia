import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

const authMiddleware = async (req: NextRequest) => {
  try {
    const session = await getServerSession(authOption);
    if (!session) {
      return Response.json(
        { message: "please login for accessing the system" },
        { status: 401 }
      );
    }
    const role = session.user.role;
  } catch (error) {}
};
