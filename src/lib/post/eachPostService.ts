/**
 * MeatPartのnameに基づいて関連する投稿を取得する
 * @param meatPartName 肉の部位名
 * @param userId 現在ログインしているユーザーID（いいね情報取得用、任意）
 * @returns 関連する投稿の配列
 */

import { prisma } from "../prisma";

export async function fetchPostsByMeatPartName(
  meatPartName: string,
  userId: string | null = null
) {
  try {
    return await prisma.post.findMany({
      where: {
        name: meatPartName, // name フィールドが部位名と一致するポストを検索
      },
      include: {
        author: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            replies: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.error(
      `Error fetching posts for meat part "${meatPartName}":`,
      error
    );
    return [];
  }
}
