"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { revalidatePath, revalidateTag } from "next/cache";

type State = {
  error?: string | undefined;
  success: boolean;
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

    const contentText = formData.get("content") as string; //nullは許容されない
    const contentTextSchema = z
      .string()
      .min(2, "contentを入力してください")
      .max(300, "300字以内で入力してください");

    const validatedContentText = contentTextSchema.parse(contentText);

    // 意図的ローディングタイム
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await prisma.post.create({
      data: {
        name: "hoge",
        title: "hoge",
        content: validatedContentText,
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
        error: "予期せぬエラーが発生しました",
        success: false,
      };
    }
  }
}

export const likeAction = async (
  formData: FormData
  // postId: string
) => {
  const { userId } = await auth();

  if (!userId) {
    return { likes: [], error: "User is not authenticated" };
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
