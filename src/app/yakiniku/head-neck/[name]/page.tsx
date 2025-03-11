import { notFound } from "next/navigation";
import { fetchMeatPartByEngName } from "@/lib/part/partService";
import { ImageComponent } from "@/app/components/ImageComponent";
import { prisma } from "@/lib/prisma";
import PostList from "@/app/components/PostList";
import PostForm from "@/app/components/PostForm";
import BackButton from "@/app/components/BackButton";

export default async function Page({ params }: { params: { name: string } }) {
  // URLパスからパラメータを取得（この場合、nameパラメータは実際にはengNameを表している）
  const { name } = params;

  // デコードされたパラメータを使用して部位を英語名で検索
  const decodedEngName = decodeURIComponent(name);
  const part = await fetchMeatPartByEngName(decodedEngName);

  // 部位が見つからない場合は404ページを表示
  if (!part) {
    console.log(`Part not found with engName: ${decodedEngName}`);
    return notFound();
  }

  console.log(`Found part with engName: ${part.engName}, name: ${part.name}`);

  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3 md:pl-6">
        <div className="bg-white shadow-md rounded mt-4 w-full flex justify-center items-center">
          <ImageComponent src="/cattle_y_head.svg" />
        </div>
        <div className="bg-white shadow-md rounded p-4 mt-4 w-full">
          <h1 className="font-bold text-gray-950 text-xl md:text-2xl mb-2">
            {part.name}
          </h1>
          <p className="text-gray-800">{part.description}</p>
          <ul className="font-bold text-teal-950 my-2">
            <li>柔らかさ: {part.softness}</li>
            <li>脂肪分: {part.fat}</li>
            <li>希少度: {part.rare}</li>
            <li>用途: {part.YorO}</li>
            <li>部位の位置: {part.position}</li>
            <li>英語名: {part.engName}</li>
          </ul>
        </div>
      </section>
      <aside className="w-full md:w-1/3 flex flex-col px-3 mt-4">
        <div className="flex space-x-4">
          <PostForm />
          <BackButton />
        </div>
        <div className="pt-6">
          <h1 className="font-bold m-2 text-gray-900 md:text-2xl text-xl text-left">
            最近の口コミ
          </h1>
          <div className="flex-1 max-h-screen shadow-inner rounded-md overflow-y-auto">
            <PostList />
          </div>
        </div>
      </aside>
    </div>
  );
}

// 動的なルートパラメータを生成する関数（オプション）
export async function generateStaticParams() {
  const parts = await prisma.meatPart.findMany({
    select: { engName: true },
  });

  return parts.map((part) => ({
    name: part.engName,
  }));
}
