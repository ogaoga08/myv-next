"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { meatPartLikeAction } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";

interface MeatPartLikeButtonProps {
  meatPartId: string;
  initialIsLiked: boolean;
  likeCount: number;
}

export default function MeatPartLikeButton({
  meatPartId,
  initialIsLiked,
  likeCount,
}: MeatPartLikeButtonProps) {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [count, setCount] = useState(likeCount);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLike = async () => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("meatPartId", meatPartId);

    try {
      const result = await meatPartLikeAction(formData);

      if (result.success) {
        // いいねの状態を反転
        setIsLiked(!isLiked);
        // いいねの数を更新
        setCount((prev) => (isLiked ? prev - 1 : prev + 1));
      } else if (result.error) {
        // エラーメッセージをトーストで表示
        toast({
          variant: "destructive",
          title: "エラーが発生しました",
          description: result.error,
        });
      }
    } catch (error) {
      console.error("Error toggling like:", error);
      // 例外が発生した場合もトーストで通知
      toast({
        variant: "destructive",
        title: "エラーが発生しました",
        description: "予期せぬエラーが発生しました。再度お試しください。",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleLike}
      disabled={isLoading}
      className={`flex items-center gap-1 p-1 rounded-md transition-colors ${
        isLiked ? " text-white hover:fill-yellow-300" : " hover:bg-gray-200"
      }`}
    >
      <Star
        className={`h-6 w-6 hover:bg-slate-200 rounded-md ${
          isLiked ? "fill-yellow-400" : ""
        }`}
        strokeWidth={2}
        color={`${isLiked ? "#FFC800" : "black"}`}
      />
      <span className={`${isLiked ? "text-yellow-400" : "text-slate-500"}`}>
        {count}
      </span>
    </button>
  );
}
