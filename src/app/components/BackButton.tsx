import React from "react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="text-center bg-slate-600 text-white font-bold py-2 px-4 rounded hover:bg-red-900 hover:opacity-75"
    >
      戻る
    </button>
  );
};

export default BackButton;
