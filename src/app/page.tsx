import ChoiceButton from "./components/ChoiceButton";
import GenreButton from "./components/GenreButton";
import Search from "./ui/search";
import PartsTable from "./components/foods/table";
import { ImageComponent } from "./components/ImageComponent";
import { currentUser } from "@clerk/nextjs/server";
import ReviewList from "./components/ReviewList";
import PostList from "./components/PostList";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const query = searchParams?.query || "";

  // ユーザー情報の取得
  // const user = await currentUser();
  // console.log(user);

  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3 md:pl-6">
        <div className="bg-white shadow-md rounded mt-4 w-full flex justify-center items-center">
          <ImageComponent src="/cattle.svg" />
        </div>
        <ReviewList />
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
        <div className="pt-6">
          <h1 className="font-bold m-2 text-gray-900 md:text-2xl text-xl text-left">
            最近の口コミ
          </h1>
          <div className="flex-1 overflow-y-auto">
            <PostList />
          </div>
        </div>
      </aside>
    </div>
  );
}
