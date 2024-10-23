import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Article } from "@/types";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  const pathname = usePathname();
  const currentName = pathname ? pathname.split("/").pop() : "";

  // ルートディレクトリの場合は全件表示
  if (pathname !== "/" && article.id !== currentName) {
    return null;
  }

  return (
    <article className="shadow my-4 flex flex-col" key={article.id}>
      <div className="bg-white flex flex-col justify-start p-6 rounded-md">
        <Link
          href={`/articles/${article.id}`}
          className="text-slate-900 text-2xl font-bold hover:text-gray-700 pb-1"
        >
          {article.title}
        </Link>
        <p className="text-sm pb-3 text-slate-900">
          {new Date(article.createdAt).toLocaleString()}
        </p>
        <Link href={`/articles/${article.id}`} className="text-slate-900 pb-4">
          {article.content.length > 70
            ? article.content.substring(0, 70) + "..."
            : article.content}
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
