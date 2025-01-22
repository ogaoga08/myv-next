import React from "react";
import { useRouter, usePathname } from "next/navigation";

const ReviewButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const name = pathname ? pathname.split("/").pop() : "";

  const handleClick = () => {
    router.push(`/articles/new?name=${name}`);
  };

  return (
    <button
      disabled
      onClick={handleClick}
      className="text-center bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded hover:bg-red-900 hover:opacity-75"
    >
      口コミを書く
    </button>
  );
};

export default ReviewButton;
