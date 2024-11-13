"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Error = ({ reset }: { reset: () => void }) => {
  const router = useRouter();
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 mt-4 rounded shadow-md mx-auto p-2">
      <h3 className="font-bold mb-2">エラーが発生しました。</h3>
      <button
        onClick={() => router.back()}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-200"
      >
        戻る
      </button>
    </div>
  );
};

export default Error;
