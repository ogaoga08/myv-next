import { auth } from "@clerk/nextjs/server";
import Post from "./Post";
import { prisma } from "@/lib/prisma";
import { fetchPosts } from "@/lib/post/postService";

// 必要か謎
interface UserData {
  id: string;
  username: string | null;
  image: string | null;
}

interface LeftSidebarProps {
  currentLoginUserData: UserData | null;
}

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
