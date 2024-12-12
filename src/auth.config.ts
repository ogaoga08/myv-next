import { HangingPunctuation } from "./../node_modules/csstype/index.d";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

import type { NextAuthConfig } from "next-auth";

// auth.config.ts の例
export default {
  providers: [Google, GitHub],
  callbacks: {
    async session({ session, token }) {
      // session オブジェクトに id を追加する例
      if (token?.id) {
        session.user.id = token.id;
      }
      return session;
    },
    async jwt({ token, user }) {
      // JWT トークンに id を追加する例
      if (user?.id) {
        token.id = user.id;
      }
      return token;
    },
  },
} satisfies NextAuthConfig;
