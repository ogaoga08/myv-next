import React from "react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
    >
      戻る
    </button>
  );
};

export default BackButton;
