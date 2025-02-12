import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import CommentList from "./CommentList";
import { ClockIcon } from "./Icons";
import PostInteraction from "./PostInteraction";
import Link from "next/link";

export default function Post({ post }: any) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <div className="flex items-center gap-4 mb-4">
        <Link href={`/profile/${post.author.username}`}>
          <Avatar className="w-10 h-10">
            <AvatarImage src={post.author.image} />
            <AvatarFallback>??</AvatarFallback>
          </Avatar>
        </Link>
        <div>
          <h3 className="text-lg font-bold">{post.author.username}</h3>
        </div>
      </div>
      <div className="mb-2">
        <p className="text-slate-600 font-light">#{post.name}</p>
      </div>
      <div className="space-y-2">
        <p>{post.content}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <PostInteraction
            postId={post.id}
            initialLikes={post.likes.map((like: any) => like.userId)}
            commentNumber={post._count.replies}
          />
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <ClockIcon className="h-5 w-5" />
          <span>{post.createdAt.toLocaleString()}</span>
        </div>
      </div>
      {post.comments && <CommentList replies={post.replies} />}
    </div>
  );
}
