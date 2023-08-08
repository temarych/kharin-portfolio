import { NextAuthOptions, Session, getServerSession } from "next-auth";
import CredentialsProvider                            from "next-auth/providers/credentials";
import { prisma }                                     from "./prisma";
import { getUser }                                    from "./user";

export const authOptions: NextAuthOptions = {
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
  ],
  jwt: {
    secret: "KHARIN_PORTFOLIO"
  },
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    async session({ session, token }): Promise<Session> {
      if (session.user) {
        session.user.id = token.uid;
      }
      return session;
    }
  }
};

export const getServerAuth = async () => {
  const session = await getServerSession(authOptions);
  const id      = session?.user?.id ?? null;
  const user    = id ? await getUser(id) : null;
  return { session, user };
};