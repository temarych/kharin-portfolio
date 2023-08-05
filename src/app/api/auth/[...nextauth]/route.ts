import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider           from "next-auth/providers/credentials";
import { prisma }                    from "@utils/prisma";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email   : { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const email = credentials.email;
        const user  = await prisma.user.findFirst({ where: { email } });
        if (!user || user.password !== credentials.password) return null;
        return user;
      }
    })
  ]
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };