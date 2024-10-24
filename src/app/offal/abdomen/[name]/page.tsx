"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ArticleList from "../../../components/ArticleList";
import parts from "@/data/parts";
import { usePathname } from "next/navigation";
import Loading from "@/app/loading";
import BackButton from "@/app/components/BackButton";

const Back = () => {
  const [articles, setArticles] = useState([]);
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
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${API_URL}/api/blog`, { cache: "no-store" });
      const articlesData = await res.json();
      setArticles(articlesData);

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
          <Image
            src="/cattle_h_bowels.png"
            alt="logo"
            width={700}
            height={612}
          />
        </div>
        <div className="bg-white shadow-md rounded p-4 mb-6 mt-4 w-full">
          <h1 className="font-bold text-gray-950 md:text-2xl mb-2">
            {part.name}
          </h1>
          <p className="text-gray-800">{part.descr}</p>
          <ul className="font-bold text-teal-950 my-2">
            <li>柔らかさ: {part.softness}</li>
            <li>脂肪: {part.fat}</li>
            <li>希少度: {part.rare}</li>
          </ul>
          <div className="mt-4">
            <BackButton />
          </div>
        </div>
      </section>
      <aside className="w-full md:w-1/3 flex flex-col px-3">
        <h1 className="font-bold text-gray-900 pt-6 m-2 md:text-2xl text-left">
          みんなの口コミ
        </h1>
        <ArticleList articles={articles} />
      </aside>
    </div>
  );
};

export default Back;
