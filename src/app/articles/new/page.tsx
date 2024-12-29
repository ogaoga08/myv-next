"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import BackButton from "@/app/components/BackButton";
import { currentUser } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

function CreateBlogPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const user = await currentUser();
      const { imageUrl, firstName, lastName } = user;

      const { error } = await supabase
        .from("users")
        .insert([
          { image_url: imageUrl, first_name: firstName, last_name: lastName },
        ]);

      if (error) throw error;

      alert("ユーザー情報が保存されました");
    } catch (error) {
      console.error("Error saving user info:", error);
      alert("ユーザー情報の保存に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3 md:pl-6">
        <div className="bg-white shadow-md rounded mt-4 w-full flex justify-center items-center">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="名前"
            />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="タイトル"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="コンテンツ"
            />
            <button type="submit">{loading ? "投稿中..." : "投稿"}</button>
            <div className="mx-4">
              <BackButton />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default CreateBlogPage;
