import { prisma } from "@/lib/prisma";

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
