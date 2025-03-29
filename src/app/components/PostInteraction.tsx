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
  // likes,
  initialLikes,
  // initialIsLiked,
  commentNumber,
}: {
  postId: string;
  // likes: string[];
  initialLikes: string[];
  // initialIsLiked: boolean;
  commentNumber: number;
}) => {
  //   const [likeState, setLikeState] = useState({
  //     likeCount: likes.length,
  //     isLiked: userId ? likes.includes(userId) : false,
  //   });

  const { userId } = useAuth();

  const initialState: LikeState = {
    count: initialLikes.length,
    isLiked: userId ? initialLikes.includes(userId) : false,
  };

  // const initialState = {

  //   likes,
  //   error: undefined,
  // };

  // const [state, formAction] = useFormState(likeAction, initialState);

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

  const { toast } = useToast();

  const handleLikeSubmit = async (formData: FormData) => {
    addOptimisticLike();

    try {
      await likeAction(formData);
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "エラーが発生しました",
        description: "予期せぬエラーが発生しました。再度お試しください。",
      });
    }
  };

  return (
    <div className="flex items-center">
      <form
        // action={formAction}
        action={handleLikeSubmit}
      >
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
      {/* <Button variant="ghost" size="icon">
        <MessageCircleIcon className="h-5 w-5 text-muted-foreground" />
      </Button>
      <span className="text-muted-foreground">{commentNumber}</span>
      <Button variant="ghost" size="icon">
        <Share2Icon className="h-5 w-5 text-muted-foreground" />
      </Button> */}
    </div>
  );
};

export default PostInteraction;
