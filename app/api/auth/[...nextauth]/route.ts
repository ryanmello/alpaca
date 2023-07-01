import NextAuth from "next-auth/next";
import { authOptions } from "@/app/libs/session";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
