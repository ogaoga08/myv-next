import { prisma } from "@/lib/prisma";

//home timeline
export async function fetchPosts(userId: string | null, username?: string) {
  if (username) {
    return await prisma.post.findMany({
      where: {
        author: {
          username: username,
        },
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
  }

  return await prisma.post.findMany({
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
}
