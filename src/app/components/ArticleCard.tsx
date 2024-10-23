import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className="shadow my-4 flex flex-col" key={article.id}>
      <div className="bg-white flex flex-col justify-start p-6 rounded-md">
        {/* flex-colはカラム型に縦に表示させる */}
        <Link
          href={`articles/${article.id}`}
          className="text-slate-900 text-2xl font-bold hover:text-gray-700 pb-1"
        >
          {article.title}
        </Link>
        <p className="text-sm pb-3 text-slate-900">
          {new Date(article.createdAt).toLocaleString()}
        </p>
        <Link href={`articles/${article.id}`} className="text-slate-900 pb-4">
          {/* 三項演算子で70文字のみ表示させる */}
          {article.content.length > 70
            ? article.content.substring(0, 70) + "..."
            : article.content}
        </Link>
        <Link
          href={`articles/${article.id}`}
          className="text-pink-800 hover:text-black"
        >
          Read more
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
