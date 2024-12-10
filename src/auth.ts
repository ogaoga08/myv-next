import NextAuth, { NextAuthConfig } from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const config: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  basePath: "/api/auth",
  callbacks: {
    authorized({ request, auth }) {
      try {
        const { pathname } = request.nextUrl;
        // if (pathname === "/articles/new") {
        //   return !!auth;
        // }
        return true;
      } catch (err) {
        console.log("Authorization error:", err);
        return false;
      }
    },
    jwt({ token, trigger, session }) {
      if (trigger === "update") token.name = session.user.name;
      return token;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
// auth : サーバーサイドでセッションを取得するための関数
