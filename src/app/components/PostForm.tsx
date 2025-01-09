"use client";

import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SendIcon } from "./Icons";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import { useRef, useState } from "react";
import { addPostAction } from "@/lib/actions";

export default function PostForm() {
  const [error, setError] = useState<string | undefined>("");
  const formRef = useRef<HTMLFormElement>(null); //入力欄のリセット用

  const hundleSubmit = async (formData: FormData) => {
    const result = await addPostAction(formData);
    if (!result?.success) {
      setError(result?.error);
    } else {
      setError("");
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };

  return (
    <div className="m-4">
      <div className="flex items-center gap-4">
        <Avatar className="w-10 h-10">
          {/* <AvatarImage src="/placeholder-user.jpg" /> */}
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <form
          ref={formRef}
          action={hundleSubmit}
          className="flex flex-1 items-center"
        >
          {/* <Input
          type="text"
          placeholder="What's on your mind?"
          className="flex-1 rounded-full bg-muted px-4 py-2 text-slate-900"
          name="name"
        />
      <Input
          type="text"
          placeholder="What's on your mind?"
          className="flex-1 rounded-full bg-muted px-4 py-2 text-slate-900"
          name="title"
        /> */}
          <Input
            type="text"
            placeholder="最近食べた部位は？"
            className="wーfull rounded bg-muted px-4 py-2 text-slate-900"
            name="content"
          />
          <Button variant="ghost" size="icon">
            <SendIcon className="h-5 w-5 text-muted-foreground" />
            <span className="sr-only">Tweet</span>
          </Button>
        </form>
      </div>
      {error && <p className="text-destructive mt-1 ml-14">{error}</p>}
    </div>
  );
}
