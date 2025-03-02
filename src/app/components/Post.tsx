import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import CommentList from "./CommentList";
import { ClockIcon } from "./Icons";
import PostInteraction from "./PostInteraction";
import Link from "next/link";
import Rating from "./Star";
import React from "react";

export default function Post({ post }: any) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <div className="flex items-center gap-3 mb-4">
        <Link href={`/profile/${post.author.username}`}>
          <Avatar className="w-8 h-8">
            <AvatarImage src={post.author.image} />
            <AvatarFallback>??</AvatarFallback>
          </Avatar>
        </Link>
        <div>
          <h3 className="text-base font-bold">{post.author.username}</h3>
        </div>
      </div>
      <div className="px-1">
        <div className="mb-2">
          <p className="text-slate-600 font-light">#{post.name}</p>
        </div>
        <div className="mb-4 px-1">
          <Rating star={post.rating} readOnly size={20} />
        </div>
        <div className="">
          <p>
            {post.content.split("\n").map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
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
      {/* {post.comments && <CommentList replies={post.replies} />} */}
    </div>
  );
}
