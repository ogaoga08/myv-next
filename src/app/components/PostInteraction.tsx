"use client";

import React, { useOptimistic } from "react";
import { Button } from "./ui/button";
import { likeAction } from "@/lib/actions";
import { useAuth } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LikeState {
  count: number;
  isLiked: boolean;
}

const PostInteraction = ({
  postId,
  initialLikes,
}: {
  postId: string;
  initialLikes: string[];
  commentNumber: number;
}) => {
  const { userId } = useAuth();
  const { toast } = useToast();

  const initialState: LikeState = {
    count: initialLikes.length,
    isLiked: userId ? initialLikes.includes(userId) : false,
  };

  // 楽観的UI更新(非同期処理の実行中、一時的にコピーを表示させるReactフック)
  const [optimisticLike, addOptimisticLike] = useOptimistic<LikeState, void>(
    initialState,
    (currentState) => ({
      count: currentState.isLiked
        ? currentState.count - 1
        : currentState.count + 1,
      isLiked: !currentState.isLiked,
    })
  );

  const handleLikeSubmit = async (formData: FormData) => {
    // 楽観的UIの更新を適用する前に、クライアントサイドでもログイン状態を確認
    if (!userId) {
      toast({
        variant: "destructive",
        title: "エラーが発生しました",
        description: "いいねするにはログインが必要です。",
      });
      return;
    }

    // 楽観的UIの更新を適用
    addOptimisticLike();

    try {
      const result = await likeAction(formData);

      // likeActionの結果を確認
      if (result && result.error) {
        // エラーメッセージをトーストで表示
        toast({
          variant: "destructive",
          title: "エラーが発生しました",
          description: result.error,
        });

        // エラー発生時に楽観的UIの更新を元に戻す処理が必要
        // 現在のuseOptimisticの実装では直接戻せないため、
        // ページのリロードやより複雑な状態管理が必要
      }
    } catch (err: any) {
      // 例外が発生した場合
      toast({
        variant: "destructive",
        title: "エラーが発生しました",
        description: "予期せぬエラーが発生しました。再度お試しください。",
      });
    }
  };

  return (
    <div className="flex items-center">
      <form action={handleLikeSubmit}>
        <input type="hidden" name="postId" value={postId} />
        <Button variant="ghost" size="icon" className="hover:bg-slate-200">
          <Heart
            className={` ${
              optimisticLike.isLiked
                ? "text-destructive fill-red-500"
                : "text-muted-foreground"
            }`}
            stroke={optimisticLike.isLiked ? "red" : "currentColor"}
          />
        </Button>
      </form>
      <span
        className={`-ml-1 ${
          optimisticLike.isLiked ? "text-destructive" : "text-muted-foreground"
        }`}
      >
        {optimisticLike.count}
      </span>
    </div>
  );
};

export default PostInteraction;
