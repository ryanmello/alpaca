import NextAuth from "next-auth/next";
import { authOptions } from "@/app/libs/session";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// import bcrypt from "bcrypt";
// import NextAuth, { AuthOptions, NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GithubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import prisma from "@/app/libs/prismadb";

// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//   ],
//   debug: process.env.NODE_ENV == "development",
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };