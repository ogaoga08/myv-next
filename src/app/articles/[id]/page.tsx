"use client";

import React from "react";
import Image from "next/image";
import { getDetailArticle } from "@/blogAPI";
import DeleteButton from "@/app/components/DeleteButton";
import BackButton from "@/app/components/BackButton";

const Article = async ({ params }: { params: { id: number } }) => {
  // API呼び出し
  // const detailArticle = await getDetailArticle(params.id);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${API_URL}/api/blog/${params.id}`, {
    next: { revalidate: 10 },
  }); //リアルタイムで更新されがだからSSR
  const detailArticle = await res.json();

  return (
    <div className="mx-5 items-center">
      <div className="bg-white rounded-xl max-w-3xl mx-auto p-8 my-5">
        <h1 className="font-bold text-slate-900 text-2xl text-center mb-5 mt-5">
          {detailArticle.title}
        </h1>
        <div className="font-medium text-slate-700 leading-relaxed text-justify">
          <p className="text-right">
            {new Date(detailArticle.createdAt).toLocaleString()}
          </p>
        </div>
        <div className="font-semibold text-slate-900 text-lg leading-relaxed text-justify">
          <p>{detailArticle.content}</p>
        </div>
        <div className="text-right mt-3">
          <DeleteButton createdAt={detailArticle.createdAt} />
        </div>
      </div>
      <div className="flex justify-center">
        <BackButton />
      </div>
    </div>
  );
};

export default Article;
