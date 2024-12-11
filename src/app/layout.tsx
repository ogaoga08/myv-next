import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from "react";
import Loading from "./loading";
import { Noto_Sans_JP } from "next/font/google";

const fontNoto = Noto_Sans_JP({ subsets: ["latin"] });

// メタ情報
export const metadata: Metadata = {
  title: "myv",
  description: "あなたのお気に入り部位投稿SNS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,minimum-scale=1.0"
      />
      <body className={fontNoto.className}>
        <div className="bg-slate-200 text-slate-50 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
