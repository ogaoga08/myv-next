"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import parts from "@/data/partsData";
import { usePathname } from "next/navigation";
import Loading from "@/app/loading";
import BackButton from "@/app/components/BackButton";
import ReviewButton from "@/app/components/ReviewButton";
import { ImageComponent } from "@/app/components/ImageComponent";
import RatingStar from "@/app/components/RatingStar";

const Back = () => {
  // const [articles, setArticles] = useState([]);
  interface Part {
    name: string;
    descr: string;
    softness: number;
    fat: number;
    rare: number;
    engname: string;
  }

  const [part, setPart] = useState<Part | null>(null);
  const pathname = usePathname();
  const name = pathname ? pathname.split("/").pop() : "";

  useEffect(() => {
    const fetchData = async () => {
      // const API_URL = process.env.NEXT_PUBLIC_API_URL;
      // const res = await fetch(`${API_URL}/api/blog`, { cache: "no-store" });
      // const articlesData = await res.json();
      // setArticles(articlesData);

      const partData = parts.find((part) => part.engname === name);
      setPart(partData || null);
    };

    fetchData();
  }, [name]);

  if (!part) {
    return <Loading />;
  }

  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3 md:pl-6">
        <div className="bg-white shadow-md rounded mt-4 w-full flex justify-center items-center">
          <ImageComponent src="/cattle_y_stomach.svg" />
        </div>
        <div className="bg-white shadow-md rounded p-4 mt-4 w-full">
          <h1 className="font-bold text-gray-950 md:text-2xl mb-2">
            {part.name}
          </h1>
          <p className="text-gray-800">{part.descr}</p>
          <ul className="font-bold text-teal-950 my-2">
            <li className="flex justify-between items-center my-2">
              <div className="w-1/5">柔らかさ</div>
              <div className="w-4/5">
                <RatingStar props={part.softness} />
              </div>
            </li>
            <li className="flex justify-between items-center my-2">
              <div className="w-1/5">脂肪</div>
              <div className="w-4/5">
                <RatingStar props={part.fat} />
              </div>
            </li>
            <li className="flex justify-between items-center my-2">
              <div className="w-1/5">希少度</div>
              <div className="w-4/5">
                <RatingStar props={part.rare} />
              </div>
            </li>
          </ul>
        </div>
      </section>
      <aside className="w-full md:w-1/3 flex flex-col px-3">
        <div className="pt-3">
          <h1 className="font-bold m-2 text-teal-950 md:text-xl text-left">
            /焼肉/胸から腹/{part.name}
          </h1>
          <div className="my-6 flex justify-center space-x-4">
            <div className="flex-1 min-w-[150px]">
              <ReviewButton />
            </div>
            <div className="flex-1 min-w-[150px]">
              <BackButton />
            </div>
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

export default Back;
