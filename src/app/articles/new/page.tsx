"use client";

import { createArticle } from "@/blogAPI";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

function CreateBlogPage() {
  const router = useRouter();
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // リロードを防ぐ
    e.preventDefault();

    setLoading(true);

    // APIを叩く(JSONサーバー)
    // await createArticle(id, title, content);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    await fetch(`${API_URL}/api/blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title, content }),
    }); //リアルタイムで更新されがだからSSR

    setLoading(false);
    router.back();
    router.refresh();
  };

  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">口コミ新規投稿</h2>
      <form
        className="bg-slate-200 p-6 rounded shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">部位名</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">
            タイトル
          </label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">本文</label>
          <textarea
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button
          className={`py-2 px-4 border rounded-md ${
            loading
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          } `}
          disabled={loading}
          type="submit"
        >
          投稿
        </button>
      </form>
    </div>
  );
}

export default CreateBlogPage;
