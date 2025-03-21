import { prisma } from "@/lib/prisma";
import { isUserLikedMeatPart } from "@/lib/actions";

export async function fetchMeatParts() {
  try {
    const meatParts = await prisma.meatPart.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return meatParts;
  } catch (error) {
    console.error("Error fetching MeatParts:", error);
    return [];
  }
}

// 英語名（engName）で検索する関数を追加
export async function fetchMeatPartByEngName(engName: string) {
  try {
    const meatPart = await prisma.meatPart.findFirst({
      where: {
        engName: engName,
      },
    });
    return meatPart;
  } catch (error) {
    console.error(`Error fetching MeatPart with engName ${engName}:`, error);
    return null;
  }
}

export async function getMeatPartDetails(engName: string) {
  // デコードされたパラメータを使用して部位を英語名で検索
  const part = await fetchMeatPartByEngName(engName);

  if (!part) {
    return null;
  }

  // いいね情報を取得
  const meatPartWithLikes = await prisma.meatPart.findUnique({
    where: { id: part.id },
    include: { likes: true },
  });

  const isLiked = await isUserLikedMeatPart(part.id);
  const likeCount = meatPartWithLikes?.likes.length || 0;

  return {
    part,
    isLiked,
    likeCount,
  };
}

export async function getAllMeatPartEngNames() {
  const parts = await prisma.meatPart.findMany({
    select: { engName: true },
  });

  return parts.map((part) => part.engName);
}
