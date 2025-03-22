"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { revalidatePath, revalidateTag } from "next/cache";

type State = {
  error?: string | undefined;
  success: boolean;
  errorId?: number;
};

//　アロー関数ではなくfunctionで書きましょう(シリアライズエラーを回避するため)
export async function addPostAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  try {
    const { userId } = await auth();

    if (!userId) {
      return { error: "ログインしてください", success: false };
    }

    const nameText = formData.get("name") as string; //nullは許容されない
    const nameTextSchema = z.string().nonempty("部位名を選択してください");

    const validatedNameText = nameTextSchema.parse(nameText);

    const ratingValue = formData.get("rating") as string;
    const ratingValueSchema = z
      .number()
      .positive("星は1以上で入力してください");

    const validatedRatingValue = ratingValueSchema.parse(Number(ratingValue));

    const contentText = formData.get("content") as string; //nullは許容されない
    const contentTextSchema = z
      .string()
      .min(2, "本文は2文字以上で入力してください")
      .max(300, "本文は300字以内で入力してください");

    const validatedContentText = contentTextSchema.parse(contentText);
    // 意図的ローディングタイム
    await new Promise((resolve) => setTimeout(resolve, 700));

    await prisma.post.create({
      data: {
        name: validatedNameText,
        title: "",
        content: validatedContentText,
        rating: validatedRatingValue,
        authorId: userId,
      },
    });

    // ポストした瞬間にキャッシュを更新する(リロードしなくてもすぐに反映される)
    revalidatePath("/");

    return {
      error: undefined,
      success: true,
    };
  } catch (error) {
    // エラー処理(zodのエラーとそれ以外のエラーを分ける)
    if (error instanceof z.ZodError) {
      return {
        error: error.errors.map((e) => e.message).join(", "),
        success: false,
      };
    } else if (error instanceof Error) {
      return {
        error: error.message,
        success: false,
      };
    } else {
      return {
        error: "予期せぬエラーが発生しました(Unexpected error occurred)",
        success: false,
      };
    }
  }
}

// 口コミいいね機能
export const likeAction = async (
  formData: FormData
  // postId: string
) => {
  const { userId } = await auth();

  if (!userId) {
    return {
      likes: [],
      error: "アカウントが認証されていません(User is not authenticated)",
    };
  }

  const postId = formData.get("postId") as string;

  try {
    const existingLike = await prisma.like.findFirst({
      where: {
        postId,
        userId,
      },
    });

    if (existingLike) {
      await prisma.like.delete({
        where: {
          id: existingLike.id,
        },
      });

      revalidatePath("/");
    } else {
      await prisma.like.create({
        data: {
          postId,
          userId,
        },
      });

      revalidatePath("/");
    }
  } catch (err) {
    console.log(err);
  }
};

// 部位お気に入り機能
export const meatPartLikeAction = async (formData: FormData) => {
  const { userId } = await auth();

  if (!userId) {
    return {
      likes: [],
      error: "アカウントが認証されていません(User is not authenticated)",
    };
  }

  const meatPartId = formData.get("meatPartId") as string;

  try {
    const existingLike = await prisma.meatLike.findFirst({
      where: {
        meatPartId,
        userId,
      },
    });

    if (existingLike) {
      // お気に入りが既に存在する場合は削除（いいね解除）
      await prisma.meatLike.delete({
        where: {
          id: existingLike.id,
        },
      });

      revalidatePath("/meat-parts");
      revalidatePath(`/meat-parts/${meatPartId}`);
    } else {
      // お気に入りが存在しない場合は新規作成
      await prisma.meatLike.create({
        data: {
          meatPartId,
          userId,
        },
      });

      revalidatePath("/meat-parts");
      revalidatePath(`/meat-parts/${meatPartId}`);
    }

    return { success: true };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: "お気に入り処理中にエラーが発生しました",
    };
  }
};

// ユーザーがお気に入りした部位の一覧を取得する関数
export const getUserLikedMeatParts = async () => {
  const { userId } = await auth();

  if (!userId) {
    return [];
  }

  try {
    const userWithLikes = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
      include: {
        meatLikes: {
          include: {
            meatPart: true,
          },
        },
      },
    });

    if (!userWithLikes) {
      return [];
    }

    return userWithLikes.meatLikes.map((like) => like.meatPart);
  } catch (error) {
    console.error("Error fetching liked meat parts:", error);
    return [];
  }
};

// 特定の部位がお気に入り済みかをチェックする関数
export const isUserLikedMeatPart = async (meatPartId: string) => {
  const { userId } = await auth();

  if (!userId) {
    return false;
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    if (!user) {
      return false;
    }

    const like = await prisma.meatLike.findFirst({
      where: {
        userId: user.id,
        meatPartId,
      },
    });

    return !!like;
  } catch (error) {
    console.error("Error checking if meat part is liked:", error);
    return false;
  }
};
