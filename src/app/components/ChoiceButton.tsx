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
        <div className="pt-3">
          <h1 className="font-bold m-2 text-teal-950 md:text-xl text-left">
            /焼肉
          </h1>
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
        </div>
      );
    case "/yakiniku/back":
      return (
        <div className="pt-3">
          <h1 className="font-bold m-2 text-teal-950 md:text-xl text-left">
            /焼肉/背中
          </h1>
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
        </div>
      );
    case "/yakiniku/shoulder":
      return (
        <div className="pt-3">
          <h1 className="font-bold m-2 text-teal-950 md:text-xl text-left">
            /焼肉/肩
          </h1>
          <div className="my-4 flex flex-wrap justify-center">
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/yakiniku/shoulder/misuji"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                ミスジ
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/yakiniku/shoulder/katasankaku"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                肩サンカク
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/yakiniku/shoulder/zabuton"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                ザブトン
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <BackButton />
            </div>
          </div>
        </div>
      );
    case "/yakiniku/head-neck":
      return (
        <div className="pt-3">
          <h1 className="font-bold m-2 text-teal-950 md:text-xl text-left">
            /焼肉/頭から首
          </h1>
          <div className="my-4 flex flex-wrap justify-center">
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/yakiniku/head-neck/tongue"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                タン
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/yakiniku/head-neck/neck"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                ネック
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <BackButton />
            </div>
          </div>
        </div>
      );
    case "/yakiniku/chest-belly":
      return (
        <div className="pt-3">
          <h1 className="font-bold m-2 text-teal-950 md:text-xl text-left">
            /焼肉/胸から腹
          </h1>
          <div className="my-4 flex flex-wrap justify-center">
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/yakiniku/chest-belly/short-rib(karubi)"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                タテバラ(カルビ)
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/yakiniku/chest-belly/flap-meat"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                カイノミ
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/yakiniku/chest-belly/sankakubara"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                サンカクバラ(特上カルビ)
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <BackButton />
            </div>
          </div>
        </div>
      );
    case "/yakiniku/round":
      return (
        <div className="pt-3">
          <h1 className="font-bold m-2 text-teal-950 md:text-xl text-left">
            /焼肉/モモ
          </h1>
          <div className="my-4 flex flex-wrap justify-center">
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/yakiniku/round/rump"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                ランプ
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/yakiniku/round/ichibo"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                イチボ
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/yakiniku/round/shikinbo"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                シキンボ
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/yakiniku/round/shinshin"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                シンシン
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <BackButton />
            </div>
          </div>
        </div>
      );
    case "/offal":
      return (
        <div className="pt-3">
          <h1 className="font-bold m-2 text-teal-950 md:text-xl text-left">
            /ホルモン
          </h1>
          <div className="my-4 flex flex-wrap justify-center">
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="offal/head-chest"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                頭・胸あたり
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="offal/stomach"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                胃袋あたり
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="offal/abdomen"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                下腹部あたり
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <BackButton />
            </div>
          </div>
        </div>
      );
    case "/offal/head-chest":
      return (
        <div className="pt-3">
          <h1 className="font-bold m-2 text-teal-950 md:text-xl text-left">
            /ホルモン/頭・胸あたり
          </h1>
          <div className="my-4 flex flex-wrap justify-center">
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/offal/head-chest/hatsu"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                ハツ
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/offal/head-chest/tsurami"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                ツラミ
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/offal/head-chest/urute"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                ウルテ
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/offal/head-chest/shibire"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                シビレ
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <BackButton />
            </div>
          </div>
        </div>
      );
    case "/offal/stomach":
      return (
        <div className="pt-3">
          <h1 className="font-bold m-2 text-teal-950 md:text-xl text-left">
            /ホルモン/胃袋あたり
          </h1>
          <div className="my-4 flex flex-wrap justify-center">
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/offal/stomach/senmai"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                センマイ
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/offal/stomach/hachinosu"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                ハチノス
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/offal/stomach/mino"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                ミノ
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <BackButton />
            </div>
          </div>
        </div>
      );
    case "/offal/abdomen":
      return (
        <div className="pt-3">
          <h1 className="font-bold m-2 text-teal-950 md:text-xl text-left">
            /ホルモン/下腹部あたり
          </h1>
          <div className="my-4 flex flex-wrap justify-center">
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/offal/abdomen/harami(sagari)"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                ハラミ(サガリ)
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/offal/abdomen/liver"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                レバー
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/offal/abdomen/himo(marucho)"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                ヒモ(マルチョウ)
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/offal/abdomen/shimacho"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                シマチョウ
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <Link
                href="/offal/abdomen/mame"
                className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
              >
                マメ
              </Link>
            </div>
            <div className="m-4 flex-1 min-w-[150px]">
              <BackButton />
            </div>
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
