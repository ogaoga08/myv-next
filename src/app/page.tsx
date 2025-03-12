import ChoiceButton from "./components/ChoiceButton";
import GenreButton from "./components/GenreButton";
import Search from "./ui/search";
import PartsTable from "./components/foods/table";
import { ImageComponent } from "./components/ImageComponent";
import ReviewList from "./components/ReviewList";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";

  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3 md:pl-6">
        <div className="bg-white shadow-md rounded mt-4 w-full flex justify-center items-center">
          <ImageComponent src="/cattle.svg" />
        </div>
        <div className="m-4">
          <PostForm />
        </div>
      </section>
      <aside className="w-full md:w-1/3 flex flex-col px-3 mt-4">
        <div className="">
          <Search placeholder="部位名・キーワードで検索..." />
          <PartsTable query={query} />
        </div>
        <div className="pt-6">
          <h1 className="font-bold m-2 text-gray-900 md:text-2xl text-xl text-left">
            部位の場所で探す
          </h1>
          <ChoiceButton />
        </div>

        <h1 className="font-bold m-2 text-gray-900 md:text-2xl text-xl text-left">
          特徴で探す
        </h1>
        <GenreButton />

        <h1 className="font-bold m-2 text-gray-900 md:text-2xl text-xl text-left">
          最近の口コミ
        </h1>
        <div className="flex-1 rounded-md overflow-y-auto max-h-[450px]">
          <PostList />
        </div>
      </aside>
    </div>
  );
}
