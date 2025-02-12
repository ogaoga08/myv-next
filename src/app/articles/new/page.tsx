"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import BackButton from "@/app/components/BackButton";

function CreateBlogPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  // const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const name = searchParams?.get("name");
    if (name) {
      setName(name);
    }
  }, [searchParams]);

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
      body: JSON.stringify({ name, title, content }),
    }); //リアルタイムで更新されがだからSSR

    setLoading(false);
    router.back();
    router.refresh();
  };

  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">口コミ新規投稿</h2>
      <form
        className="bg-slate-100 p-6 rounded shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">部位名</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled
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
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">本文</label>
          <textarea
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center">
          <button
            className={`py-2 px-4 border rounded-md ${
              loading
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            } `}
            disabled={loading}
            type="submit"
          >
            {loading ? "投稿中..." : "投稿"}
          </button>
          <div className="mx-4">
            <BackButton />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateBlogPage;
