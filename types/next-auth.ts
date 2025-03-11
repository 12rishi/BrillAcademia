declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      name: string;
      role: string;
      id: string | number;
      image: string;
    };
  }
}
