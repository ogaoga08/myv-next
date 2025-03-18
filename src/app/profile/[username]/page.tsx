// src/app/profile/[username]/page.tsx
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { prisma } from "@/lib/prisma";
import PostList from "@/app/components/PostList";
import Link from "next/link";
import { getUserLikedMeatParts } from "@/lib/actions";
import { auth } from "@clerk/nextjs/server";

type Props = {
  params: {
    username: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({
    where: {
      username: params.username,
    },
  });

  if (!user) {
    return {
      title: "ユーザーが見つかりません",
    };
  }

  return {
    title: `${user.name || user.username}のプロフィール`,
    description: `${user.name || user.username}のプロフィールページです。`,
  };
}

export default async function ProfilePage({ params }: Props) {
  const { username } = params;

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    include: {
      _count: {
        select: {
          posts: true,
          likes: true,
          meatLikes: true,
        },
      },
    },
  });

  if (!user) {
    return notFound();
  }

  // IDを取得して現在のユーザーかどうかを確認
  const { userId: clerkId } = await auth();
  const isCurrentUser = clerkId === user.clerkId;

  // お気に入り部位を取得
  const likedMeatParts = await prisma.meatLike.findMany({
    where: {
      userId: user.id,
    },
    include: {
      meatPart: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col px-3 md:pl-6">
        {/* プロフィール情報 */}
        <div className="bg-white shadow-md rounded p-4 mt-4 w-full">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="w-24 h-24">
              <AvatarImage
                src={user.image || "/placeholder-user.jpg"}
                alt={`${user.username}のプロフィール画像`}
              />
              <AvatarFallback>
                {user.username.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h1 className="text-3xl font-extrabold">
                {user.name || user.username}
              </h1>
              <div className="text-gray-500 md:text-start text-center">
                @{user.username}
              </div>
              {/* {user.bio && <p className="mt-2 text-gray-700">{user.bio}</p>} */}
            </div>

            <div className="flex gap-4 flex-wrap">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">{user._count.posts}</div>
                <div className="text-gray-500">投稿</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">
                  {user._count.meatLikes}
                </div>
                <div className="text-gray-500">お気に入り部位</div>
              </div>
            </div>
          </div>
        </div>

        {/* お気に入り部位一覧 */}
        <div className="bg-white shadow-md rounded p-4 mt-4 w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">お気に入りの部位</h2>
            {/* {isCurrentUser && user._count.meatLikes > 6 && (
              <Link
                href="/favorites"
                className="text-emerald-600 hover:underline"
              >
                すべて見る
              </Link>
            )} */}
          </div>

          {likedMeatParts.length === 0 ? (
            <p className="text-gray-500 py-4">
              {isCurrentUser
                ? "お気に入りの部位はまだありません。部位ページからお気に入り登録してみましょう！"
                : "お気に入りの部位はまだありません。"}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {likedMeatParts.map(({ meatPart }) => (
                <Link
                  key={meatPart.id}
                  href={`/${meatPart.YorO}/${meatPart.position}/${meatPart.engName}`}
                  className="border rounded-lg p-3 hover:shadow-md transition-shadow"
                >
                  <div className="font-bold">{meatPart.name}</div>
                  <div className="text-sm text-gray-500 mb-2">
                    {meatPart.engName}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    <span className="inline-flex items-center text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                      柔らかさ: {meatPart.softness}/5
                    </span>
                    <span className="inline-flex items-center text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full">
                      脂肪分: {meatPart.fat}/5
                    </span>
                    <span className="inline-flex items-center text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">
                      希少度: {meatPart.rare}/5
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {isCurrentUser && likedMeatParts.length === 0 && (
            <Link
              href="/"
              className="mt-4 inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              部位を探す
            </Link>
          )}
        </div>
      </section>

      {/* サイドバー: 投稿一覧 */}
      <aside className="w-full md:w-1/3 flex flex-col px-3">
        <div className="pt-3">
          <h1 className="font-bold m-2 text-gray-900 md:text-2xl text-xl text-left">
            {user.username}の投稿
          </h1>
          <div className="flex-1 max-h-screen shadow-inner rounded-md overflow-y-auto">
            <PostList username={username} />
          </div>
        </div>
      </aside>
    </div>
  );
}
