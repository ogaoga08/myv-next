"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const ChoiceButton = () => {
  const pathname = usePathname();
  const router = useRouter();

  switch (pathname) {
    case "/yakiniku":
      return (
        <div className="my-4 flex flex-wrap justify-center">
          <div className="m-4 flex-1 min-w-[150px]">
            <Link
              href="#"
              className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
            >
              頭から首
            </Link>
          </div>
          <div className="m-4 flex-1 min-w-[150px]">
            <Link
              href="#"
              className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
            >
              肩
            </Link>
          </div>
          <div className="m-4 flex-1 min-w-[150px]">
            <Link
              href="#"
              className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
            >
              背中
            </Link>
          </div>
          <div className="m-4 flex-1 min-w-[150px]">
            <Link
              href="#"
              className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
            >
              胸から腹
            </Link>
          </div>
          <div className="m-4 flex-1 min-w-[150px]">
            <Link
              href="#"
              className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
            >
              モモ
            </Link>
          </div>
          <button
            onClick={() => router.back()}
            className="m-4 text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
          >
            戻る
          </button>
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
          <button
            onClick={() => router.back()}
            className="m-4 text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
          >
            戻る
          </button>
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
