// components/PostForm.tsx
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SendIcon } from "./Icons";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export default async function PostForm() {
  const { userId } = await auth();
  async function addPostAction(formData: FormData) {
    "use server";
    const postText = formData.get("post") as string; //nullは許容されない
    // console.log(postText);

    if (!userId) {
      return;
    }

    try {
      await prisma.post.create({
        data: {
          name: "hoge",
          title: "hoge",
          content: postText,
          authorId: userId,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex items-center gap-4">
      <Avatar className="w-10 h-10">
        {/* <AvatarImage src="/placeholder-user.jpg" /> */}
        <AvatarFallback>AC</AvatarFallback>
      </Avatar>
      <form action={addPostAction} className="flex flex-1 items-center">
        <Input
          type="text"
          placeholder="What's on your mind?"
          className="flex-1 rounded-full bg-muted px-4 py-2 text-slate-900"
          name="post"
        />
        <Button variant="ghost" size="icon">
          <SendIcon className="h-5 w-5 text-muted-foreground" />
          <span className="sr-only">Tweet</span>
        </Button>
      </form>
    </div>
  );
}
