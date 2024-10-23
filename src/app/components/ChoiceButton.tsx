"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import BackButton from "./BackButton";

const ChoiceButton = () => {
  const pathname = usePathname();
  const router = useRouter();

  switch (pathname) {
    case "/yakiniku":
      return (
        <div className="my-4 flex flex-wrap justify-center">
          <div className="m-4 flex-1 min-w-[150px]">
            <Link
              href="/yakiniku/head-neck"
              className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
            >
              頭から首
            </Link>
          </div>
          <div className="m-4 flex-1 min-w-[150px]">
            <Link
              href="/yakiniku/shoulder"
              className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
            >
              肩
            </Link>
          </div>
          <div className="m-4 flex-1 min-w-[150px]">
            <Link
              href="/yakiniku/back"
              className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
            >
              背中
            </Link>
          </div>
          <div className="m-4 flex-1 min-w-[150px]">
            <Link
              href="/yakiniku/chest-belly"
              className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
            >
              胸から腹
            </Link>
          </div>
          <div className="m-4 flex-1 min-w-[150px]">
            <Link
              href="/yakiniku/round"
              className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
            >
              モモ
            </Link>
          </div>
          <div className="m-4 flex-1 min-w-[150px]">
            <BackButton />
          </div>
        </div>
      );
    case "/yakiniku/back":
      return (
        <div className="my-4 flex flex-wrap justify-center">
          <div className="m-4 flex-1 min-w-[150px]">
            <Link
              href="/yakiniku/back/sirloin"
              className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
            >
              サーロイン
            </Link>
          </div>
          <div className="m-4 flex-1 min-w-[150px]">
            <Link
              href="/yakiniku/back/ribeye"
              className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
            >
              リブロース
            </Link>
          </div>
          <div className="m-4 flex-1 min-w-[150px]">
            <Link
              href="/yakiniku/back/tenderloin"
              className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
            >
              ヒレ
            </Link>
          </div>
          <div className="m-4 flex-1 min-w-[150px]">
            <Link
              href="/yakiniku/back/chateaubriand"
              className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
            >
              シャトーブリアン
            </Link>
          </div>
          <div className="m-4 flex-1 min-w-[150px]">
            <BackButton />
          </div>
        </div>
      );
    case "/offal":
      return (
        <div className="my-4 flex flex-wrap justify-center">
          <div className="m-4 flex-1 min-w-[150px]">
            <Link
              href="#"
              className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
            >
              頭・胸あたり
            </Link>
          </div>
          <div className="m-4 flex-1 min-w-[150px]">
            <Link
              href="#"
              className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
            >
              胃袋あたり
            </Link>
          </div>
          <div className="m-4 flex-1 min-w-[150px]">
            <Link
              href="#"
              className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
            >
              下腹部あたり
            </Link>
          </div>
          <div className="m-4 flex-1 min-w-[150px]">
            <BackButton />
          </div>
        </div>
      );

    default:
      return (
        <div className="my-4 flex flex-wrap justify-center">
          <div className="m-4 flex-1 min-w-[150px]">
            <Link
              href={`/yakiniku`}
              className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
            >
              焼肉
            </Link>
          </div>
          <div className="m-4 flex-1 min-w-[150px]">
            <Link
              href={`/offal`}
              className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
            >
              ホルモン
            </Link>
          </div>
        </div>
      );
  }
};

export default ChoiceButton;
