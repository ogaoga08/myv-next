import { auth } from "@clerk/nextjs/server";
import Post from "./Post";
import { fetchPosts } from "@/lib/post/postService";
import { fetchPostsByMeatPartName } from "@/lib/post/eachPostService";

interface UserData {
  id: string;
  username: string | null;
  image: string | null;
}

interface PostListProps {
  username?: string;
  meatPartName?: string; // 肉の部位名を指定するためのプロパティを追加
}

export default async function PostList({
  username,
  meatPartName,
}: PostListProps) {
  const { userId } = await auth();

  // meatPartNameが提供されている場合はそれに基づいてフィルタリング
  // それ以外の場合は既存のfetchPosts関数を使用
  const posts = meatPartName
    ? await fetchPostsByMeatPartName(meatPartName, userId)
    : await fetchPosts(userId, username);

  return (
    <div className="space-y-4 text-slate-800">
      {posts && posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <h3 className="text-center xl:mt-64 xl:text-xl font-bold m-5">
          投稿された口コミはありません
        </h3>
      )}
    </div>
  );
}
