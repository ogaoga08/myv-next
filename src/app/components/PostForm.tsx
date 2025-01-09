"use client";

import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Input } from "./ui/input";
import { useRef, useState } from "react";
import { addPostAction } from "@/lib/actions";
import { SubmitButton } from "./SubmitButton";
import { useFormState } from "react-dom";

export default function PostForm() {
  const initialState = {
    error: undefined,
    success: false,
  };
  // const [error, setError] = useState<string | undefined>("");
  const formRef = useRef<HTMLFormElement>(null); //入力欄のリセット用

  // useFormStateを使った書き方
  // サーバアクションを使う時に楽にバリデーションチェックができる(React15以降はuseActionState)
  const [state, formAction] = useFormState(addPostAction, initialState);

  // サーバーアクションの普通の書き方(めんどいね)
  // const hundleSubmit = async (formData: FormData) => {
  //   const result = await addPostAction(formData);
  //   if (!result?.success) {
  //     setError(result?.error);
  //   } else {
  //     setError("");
  //     if (formRef.current) {
  //       formRef.current.reset();
  //     }
  //   }
  // };

  if (state.success && formRef.current) {
    formRef.current.reset();
  }

  return (
    <div className="m-4">
      <div className="flex items-center gap-4">
        <Avatar className="w-10 h-10">
          {/* <AvatarImage src="/placeholder-user.jpg" /> */}
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <form
          ref={formRef}
          action={formAction}
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
          <SubmitButton />
        </form>
      </div>
      {state.error && (
        <p className="text-destructive mt-1 ml-14">{state.error}</p>
      )}
    </div>
  );
}
