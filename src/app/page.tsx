import Image from "next/image";
import ArticleList from "./components/ArticleList";
import { getAllArticles } from "@/blogAPI";
import { supabase } from "@/utils/supabaseClient";
import ChoiceButton from "./components/ChoiceButton";

export default async function Home() {
  // const articles = await getAllArticles();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${API_URL}/api/blog`, { cache: "no-store" }); //リアルタイムで更新されがだからSSR
  const articles = await res.json();
  // console.log(articles);

  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3 md:pl-6">
        <div className="bg-white shadow-md rounded mt-4 w-full flex justify-center items-center">
          <Image src="/cattle.png" alt="logo" width={700} height={612} />
        </div>
      </section>
      <aside className="w-full md:w-1/3 flex flex-col px-3">
        <ChoiceButton />
        <div className="border-b">
          <h1 className="font-bold text-gray-900 pt-6 m-2 md:text-2xl text-left">
            最近の口コミ
          </h1>
        </div>

        <ArticleList articles={articles} />
      </aside>
    </div>
  );
}
