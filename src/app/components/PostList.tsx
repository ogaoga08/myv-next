import { auth } from "@clerk/nextjs/server";
import Post from "./Post";
import { prisma } from "@/lib/prisma";
import { fetchPosts } from "@/lib/post/postService";

export default async function PostList({ username }: { username?: string }) {
  const { userId } = await auth();

  const posts = await fetchPosts(userId, username);

  return (
    <div className="space-y-4 text-slate-800 shadow">
      {posts
        ? posts.map((post) => <Post key={post.id} post={post} />)
        : "投稿された口コミはありません!"}
    </div>
  );
}
