import React from "react";
import { auth } from "@/auth";
import Link from "next/link";

const page = async () => {
  const session = await auth();
  return (
    <div className="flex flex-col gap-6 text-slate-900 m-5">
      <h1 className="text-3xl font-bold">🚀NextAuth.js Tutorial</h1>
      <div>
        <Link href="/server-example" className="underline">
          サーバー
        </Link>
        と
        <Link href="/client-example" className="underline">
          クライアント
        </Link>
        の例を見て、ページを保護してセッションデータを取得する方法を確認してください。
      </div>
      <div className="flex flex-col rounded-lg bg-neutral-100 shadow">
        <div className="p-4 font-bold rounded-t-md bg-neutral-200">
          Current Session
        </div>
        <pre className="py-6 px-4 whitespace-pre-wrap break-all">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default page;