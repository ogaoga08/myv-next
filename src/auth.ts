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
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  basePath: "/api/auth",
  callbacks: {
    authorized({ request, auth }) {
      try {
        const { pathname } = request.nextUrl;
        // if (pathname === "/articles/new") {
        //   return !!auth; //強制的にオブジェクトの値を真偽値に変換(authが存在する→true, authが存在しない→false)
        // }
        return true;
      } catch (err) {
        console.log(err);
      }
    },
    jwt({ token, trigger, session }) {
      if (trigger === "update") token.name = session.user.name; //ユーザーの認証状態を更新する際は、usernameを最新の状態に更新する
      return token;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
// auth : サーバーサイドでセッションを取得するための関数
