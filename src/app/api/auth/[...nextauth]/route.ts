import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.SECRET_OAUTH as string,
});
export { handler as GET, handler as POST };
