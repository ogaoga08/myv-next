import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Part } from "@/types";
type PartCardProps = {
  part: Part;
};
const PartCard = ({ part }: PartCardProps) => {
  const pathname = usePathname();
  const currentName = pathname ? pathname.split("/").pop() : "";
  // ルートディレクトリの場合は全件表示
  if (pathname !== "/" && part.engName !== currentName) {
    return null;
  }
  return (
    <div className="md:flex" key={part.engName}>
      <section className="w-full md:w-2/3 flex flex-col items-center px-3 md:pl-6">
        <div className="bg-white shadow-md rounded mt-4 w-full flex justify-center items-center">
          {/* <ImageComponent src="/cattle_y_head.svg" /> */}
        </div>
        <div className="bg-white shadow-md rounded p-4 mt-4 w-full">
          <h1 className="font-bold text-gray-950 md:text-2xl mb-2">
            {part.name}
          </h1>
          <p className="text-gray-800">{part.description}</p>
          <ul className="font-bold text-teal-950 my-2">
            <li className="flex justify-between items-center my-2">
              <div className="w-1/5">柔らかさ</div>
              <div className="w-4/5">
                {/* <RatingStar props={part.softness} /> */}
              </div>
            </li>
            <li className="flex justify-between items-center my-2">
              <div className="w-1/5">脂肪</div>
              <div className="w-4/5">
                {/* <RatingStar props={part.fat} /> */}
              </div>
            </li>
            <li className="flex justify-between items-center my-2">
              <div className="w-1/5">希少度</div>
              <div className="w-4/5">
                {/* <RatingStar props={part.rare} /> */}
              </div>
            </li>
          </ul>
        </div>
      </section>
      <aside className="w-full md:w-1/3 flex flex-col px-3">
        <div className="pt-3">
          <h1 className="font-bold m-2 text-teal-950 md:text-xl text-left">
            /焼肉/頭から首/{part.name}
          </h1>
          <div className="my-6 flex justify-center space-x-4">
            <div className="flex-1 min-w-[150px]">{/* <ReviewButton /> */}</div>
            <div className="flex-1 min-w-[150px]">{/* <BackButton /> */}</div>
          </div>
          <h1 className="font-bold text-gray-900 pt-6 m-2 md:text-2xl text-left">
            みんなの口コミ
          </h1>
          {/* <ArticleList articles={articles} /> */}
        </div>
      </aside>
    </div>
  );
};
export default PartCard;
