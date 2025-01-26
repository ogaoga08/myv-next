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
