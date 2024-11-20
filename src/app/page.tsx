import Image from "next/image";
import ArticleList from "./components/ArticleList";
import { getAllArticles } from "@/blogAPI";
import { supabase } from "@/utils/supabaseClient";
import ChoiceButton from "./components/ChoiceButton";
import GenreButton from "./components/GenreButton";
import Search from "./ui/search";
import PartsTable from "./components/foods/table";
import { ImageComponent } from "./components/ImageComponent";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${API_URL}/api/blog`, { cache: "no-store" }); //リアルタイムで更新されがだからSSR
  const articles = await res.json();

  const query = searchParams?.query || "";

  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3 md:pl-6">
        <div className="bg-white shadow-md rounded mt-4 w-full flex justify-center items-center">
          {/* <Image src="/cattle.png" alt="logo" width={700} height={612} /> */}
          <ImageComponent />
        </div>
      </section>
      <aside className="w-full md:w-1/3 flex flex-col px-3">
        <div className="pt-4">
          <Search placeholder="部位名・キーワードで検索..." />
          <PartsTable query={query} />
        </div>
        <div className="pt-6">
          <h1 className="font-bold m-2 text-gray-900 md:text-2xl text-xl text-left">
            部位の場所で探す
          </h1>
          <ChoiceButton />
        </div>
        <div className="pt-6">
          <h1 className="font-bold m-2 text-gray-900 md:text-2xl text-xl text-left">
            特徴で探す
          </h1>
          <GenreButton />
        </div>
        {/* <div className="pt-6">
          <h1 className="font-bold m-2 text-gray-900 md:text-2xl text-xl text-left">
            最近の口コミ
          </h1>
          <ArticleList articles={articles} />
        </div> */}
      </aside>
    </div>
  );
}
