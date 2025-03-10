import connectDb from "@/database/connection";
import { User } from "@/database/schema/user.schema";
import NextAuth, { AuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
export const authOption: AuthOptions = {
  providers: [
    Google({
      clientId: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.SECRET_OAUTH as string,
  callbacks: {
    async signIn({ user }): Promise<boolean> {
      try {
        await connectDb();
        const existingData = User.findOne({ email: user?.email });
        if (!existingData) {
          await User.create({
            email: user?.email,
            userName: user?.name,
            profileImage: user?.image,
            googleId: user?.id,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async session({ session, user }) {
      try {
        const data = await User.findById(user.id);
        session.user.role = data.role;
      } catch (error) {}
    },
  },
};
const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
