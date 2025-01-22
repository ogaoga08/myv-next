/*
  Warnings:

  - You are about to drop the `Follow` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Follow" DROP CONSTRAINT "Follow_followerId_fkey";

-- DropForeignKey
ALTER TABLE "Follow" DROP CONSTRAINT "Follow_followingId_fkey";

-- DropTable
DROP TABLE "Follow";

-- CreateTable
CREATE TABLE "MeatPart" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "softness" INTEGER NOT NULL,
    "fat" INTEGER NOT NULL,
    "rare" INTEGER NOT NULL,
    "YorO" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "engName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MeatPart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MeatLike" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "meatPartId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MeatLike_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MeatPart_name_key" ON "MeatPart"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MeatLike_userId_meatPartId_key" ON "MeatLike"("userId", "meatPartId");

-- AddForeignKey
ALTER TABLE "MeatLike" ADD CONSTRAINT "MeatLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeatLike" ADD CONSTRAINT "MeatLike_meatPartId_fkey" FOREIGN KEY ("meatPartId") REFERENCES "MeatPart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
