import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/db";
import { JWT } from "next-auth/jwt";
import { AdapterUser, Account } from "next-auth/adapters";

declare module "next-auth" {
  interface JWT {
    id: string;
  }
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }: { user: AdapterUser; account: Account }) {
      if (!user.email || !account) return false;
      
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
        include: { accounts: true },
      });

      if (!existingUser) {
        await prisma.user.create({
          data: {
            email: user.email,
            name: user.name,
            image: user.image,
            password: "oauth", // Placeholder password for OAuth users
            authType: "oauth",
            accounts: {
              create: {
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                type: account.type ?? "oauth", // Ensure type is included
              },
            },
          },
          include: { accounts: true },
        });
      }

      return true;
    },

    async jwt({ token, user }: { token: JWT; user?: AdapterUser }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
  },
  session: {
    strategy: "jwt", 
    maxAge: 60 * 60,
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET, 
    maxAge: 60 * 60, 
  },

};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
