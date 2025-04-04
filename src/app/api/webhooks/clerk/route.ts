import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  // Clerkの標準環境変数名を使用
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    console.error("Missing CLERK_WEBHOOK_SECRET or SIGNING_SECRET");
    return new Response("Server configuration error", { status: 500 });
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occurred -- no svix headers", { status: 400 });
  }

  // Get the body
  let payload;
  try {
    payload = await req.json();
    const body = JSON.stringify(payload);

    // Create a new Svix instance with your secret
    const wh = new Webhook(WEBHOOK_SECRET);

    // Verify the payload with the headers
    const evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;

    const eventType = evt.type;
    console.log(`Processing webhook: ${eventType}`);

    // ユーザー作成イベント
    if (eventType === "user.created") {
      try {
        const userData = {
          id: evt.data.id,
          clerkId: evt.data.id,
          username: evt.data.username || payload.data.username,
          image: evt.data.image_url || payload.data.image_url,
        };

        console.log("Creating user with data:", userData);

        await prisma.user.create({
          data: userData,
        });

        return new Response("ユーザー登録に成功しました", { status: 200 });
      } catch (error) {
        console.error("ユーザー作成エラー:", {
          errorMessage: error instanceof Error ? error.message : String(error),
          errorStack: error instanceof Error ? error.stack : undefined,
          userData: {
            id: evt.data.id,
            username: evt.data.username || payload.data.username,
          },
        });
        return new Response("ユーザー登録に失敗しました", { status: 500 });
      }
    }

    // ユーザー更新イベント
    if (eventType === "user.updated") {
      try {
        const updateData = {
          username: evt.data.username || payload.data.username,
          image: evt.data.image_url || payload.data.image_url,
        };

        console.log("Updating user with data:", {
          id: evt.data.id,
          ...updateData,
        });

        await prisma.user.update({
          where: {
            id: evt.data.id,
          },
          data: updateData,
        });

        return new Response("ユーザー情報更新できました", { status: 200 });
      } catch (error) {
        console.error("ユーザー更新エラー:", {
          errorMessage: error instanceof Error ? error.message : String(error),
          errorStack: error instanceof Error ? error.stack : undefined,
          userId: evt.data.id,
        });
        return new Response("ユーザー情報更新できませんでした", {
          status: 500,
        });
      }
    }

    return new Response("Webhook processed", { status: 200 });
  } catch (error) {
    console.error("Webhookの検証エラー:", error);
    return new Response("Webhook verification failed", { status: 400 });
  }
}
