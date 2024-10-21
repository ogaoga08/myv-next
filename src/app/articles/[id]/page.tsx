import React from "react";
import Image from "next/image";
import { getDetailArticle } from "@/blogAPI";
import DeleteButton from "@/app/components/DeleteButton";

const Article = async ({ params }: { params: { id: string } }) => {
  // API呼び出し
  // const detailArticle = await getDetailArticle(params.id);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${API_URL}/api/blog/${params.id}`, { next: { revalidate: 10 } }); //リアルタイムで更新されがだからSSR
  const detailArticle = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src="https://picsum.photos/1000/500"
        alt="Next.js"
        width={1280}
        height={300}
      />
      <h1 className="text-4xl text-center mb-10 mt-10">
        {detailArticle.title}
      </h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailArticle.content}</p>
      </div>
      <div className="text-right mt-3">
        <DeleteButton id={detailArticle.id} />
      </div>
    </div>
  );
};

export default Article;
