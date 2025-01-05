// next.jsのホットリロード機能でPrisma Clientのインスタンス多重複製を防止するため、単一のPrisma Clientインスタンスを共有するためのコード
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
