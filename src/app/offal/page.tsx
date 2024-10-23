import React from "react";
import Image from "next/image";
import ChoiceButton from "../components/ChoiceButton";
import ArticleList from "../components/ArticleList";

const Offal = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${API_URL}/api/blog`, { cache: "no-store" }); //リアルタイムで更新されがだからSSR
  const articles = await res.json();
  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3 md:pl-6">
        <div className="bg-white shadow-md rounded mt-4 w-full flex justify-center items-center">
          <Image src="/cattle_h.png" alt="logo" width={700} height={612} />
        </div>
      </section>
      <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
        <ChoiceButton />
        <ArticleList articles={articles} />
      </aside>
    </div>
  );
};

export default Offal;
