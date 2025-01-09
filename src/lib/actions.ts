"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { revalidatePath, revalidateTag } from "next/cache";
import { error } from "console";

export async function addPostAction(formData: FormData) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return;
    }

    const contentText = formData.get("content") as string; //nullは許容されない
    const contentTextSchema = z
      .string()
      .min(2, "contentを入力してください")
      .max(300, "300字以内で入力してください");

    const validatedContentText = contentTextSchema.parse(contentText);

    await prisma.post.create({
      data: {
        name: "hoge",
        title: "hoge",
        content: validatedContentText,
        authorId: userId,
      },
    });

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
