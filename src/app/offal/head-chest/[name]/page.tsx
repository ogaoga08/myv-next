import { notFound } from "next/navigation";
import {
  getMeatPartDetails,
  getAllMeatPartEngNames,
} from "@/lib/part/partService";
import { ImageComponent } from "@/app/components/ImageComponent";
import PostList from "@/app/components/PostList";
import PostForm from "@/app/components/PostForm";
import Rating from "@/app/components/Star";
import MeatPartLikeButton from "@/app/components/PartInteraction";

export default async function Page({ params }: { params: { name: string } }) {
  // URLパスからパラメータを取得
  const { name } = params;
  const decodedEngName = decodeURIComponent(name);

  // サービスを使用してデータを取得
  const meatPartData = await getMeatPartDetails(decodedEngName);

  // 部位が見つからない場合は404ページを表示
  if (!meatPartData) {
    console.log(`Part not found with engName: ${decodedEngName}`);
    return notFound();
  }

  const { part, isLiked, likeCount } = meatPartData;

  return (
    <div className="xl:flex">
      <PostForm />
      <section className="w-full xl:w-2/3 flex flex-col items-center px-3 xl:pl-6">
        <div className="bg-white shadow-md rounded mt-4 w-full flex justify-center items-center">
          <ImageComponent src="/cattle_h_head-chest.svg" />
        </div>
        <div className="bg-white shadow-md rounded p-4 mt-4 w-full">
          <div className="flex justify-between items-center mb-2">
            <h1 className="font-bold text-gray-950 text-xl md:text-2xl mb-2">
              {part.name}
            </h1>
            <MeatPartLikeButton
              meatPartId={part.id}
              initialIsLiked={isLiked}
              likeCount={likeCount}
            />
          </div>
          <p className="text-gray-800">{part.description}</p>
          <ul className="font-bold text-teal-950 mt-4 flex flex-col md:flex-row flex-wrap gap-2">
            <li className="flex items-center">
              <span className="bg-emerald-500 text-white p-2 px-5 rounded-full flex items-center">
                柔らかさ
                <div className="ml-3">
                  <Rating star={part.softness} readOnly size={18} />
                </div>
              </span>
            </li>
            <li className="flex items-center">
              <span className="bg-emerald-500 text-white p-2 px-5 rounded-full flex items-center">
                脂肪分　
                <div className="ml-3">
                  <Rating star={part.fat} readOnly size={18} />
                </div>
              </span>
            </li>
            <li className="flex items-center">
              <span className="bg-emerald-500 text-white p-2 px-5 rounded-full flex items-center">
                希少度　
                <div className="ml-3">
                  <Rating star={part.rare} readOnly size={18} />
                </div>
              </span>
            </li>
          </ul>
        </div>
      </section>
      <aside className="w-full xl:w-1/3 flex flex-col px-3">
        <div className="pt-3">
          <h1 className="font-bold mb-6 m-2 text-teal-950 md:text-xl text-left">
            /ホルモン/頭・胸あたり/{part.name}
          </h1>
          <h1 className="font-bold m-2 text-gray-900 md:text-2xl text-xl text-left">
            最近の口コミ
          </h1>
          <div className="flex-1 max-h-screen shadow-inner rounded-md overflow-y-auto">
            <PostList meatPartName={part.name} />
          </div>
        </div>
      </aside>
    </div>
  );
}

// 部位ページを静的生成するための動的パラメータを生成
export async function generateStaticParams() {
  const engNames = await getAllMeatPartEngNames();

  return engNames.map((engName) => ({
    name: engName,
  }));
}
