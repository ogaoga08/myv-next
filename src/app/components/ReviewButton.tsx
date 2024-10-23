import Link from "next/link";
import React from "react";

const ReviewButton = () => {
  return (
    <Link
      href="/articles/new"
      className="block text-center bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 hover:opacity-75"
    >
      口コミを書く
    </Link>
  );
};

export default ReviewButton;
