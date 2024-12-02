"use client";

import CustomLink from "./custom-link";
import { useSession } from "next-auth/react";

export default function ClientExample() {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <div className="flex flex-col gap-4 text-slate-800 m-6 p-6 bg-white rounded-lg">
      <h1 className="text-3xl font-bold">クライアントサイドレンダリング</h1>
      <p>
        このページでは
        <CustomLink href="https://nextjs.authjs.dev/react#usesession">
          <code>useSession</code>
        </CustomLink>
        React Hookを使用して、クライアントサイドでセッションデータを取得します。
      </p>
      <p>
        この機能を有効にするためには、ファイルの先頭に
        <CustomLink href="https://react.devreference/nextjs/react/use-client">
          <code>use client</code>
        </CustomLink>
        ディレクティブが必要です。また、セッションデータを提供するためには、
        <strong>
          <code>client-example/page.tsx</code>
        </strong>
        に
        <CustomLink href="https://nextjs.authjs.dev/react#sessionprovider">
          <code>SessionProvider</code>
        </CustomLink>
        コンポーネントが必要です。
      </p>
      <div className="flex flex-col rounded-lg bg-neutral-100 shadow">
        <div className="p-4 font-bold rounded-t-md bg-neutral-200">
          Current Session
        </div>
        <pre className="py-6 px-4 whitespace-pre-wrap break-all">
          {status === "loading" ? "Loading..." : ""}
          {/* loadingだったらLoading...を表示, 終わったら下の一文実行
          (client側は時間がかかる) */}
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  );
}
