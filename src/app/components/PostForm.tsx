"use client";

import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Input } from "./ui/input";
import { SetStateAction, useRef, useState } from "react";
import { addPostAction } from "@/lib/actions";
import { SubmitButton } from "./SubmitButton";
import { useFormState } from "react-dom";
import Rating from "./Star";

export default function PostForm() {
  const initialState = {
    error: undefined,
    success: false,
  };
  // const [error, setError] = useState<string | undefined>("");
  const formRef = useRef<HTMLFormElement>(null); //入力欄のリセット用

  // useFormStateを使った書き方
  // サーバアクションを使う時に楽にバリデーションチェックができる(React15以降はuseActionState)

  const [rating, setRating] = useState(0);

  const handleRatingChange = (value: number) => {
    setRating(value);
    console.log(value);
  };
  // ratingの値を含めるために関数をラップする
  const submitWithRating = async (prevState: any, formData: FormData) => {
    // ratingの値をFormDataに追加
    formData.append("rating", rating.toString());
    return addPostAction(prevState, formData);
  };

  const [state, formAction] = useFormState(submitWithRating, initialState);

  // const [state, formAction] = useFormState(addPostAction, initialState);

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
    setRating(0);
  }

  return (
    <div className="m-4">
      <h1 className="font-bold m-2 mb-6 text-gray-900 md:text-2xl text-xl text-left">
        口コミを投稿する
      </h1>
      <div className="flex flex-col gap-4">
        <form
          ref={formRef}
          action={formAction}
          className="flex flex-col items-start"
        >
          <Input
            type="text"
            placeholder="カルビ"
            className="w-28 rounded bg-muted px-4 py-2 text-slate-900"
            name="name"
            autoComplete="off"
          />
          <div className="m-4">
            <Rating star={rating} onChange={handleRatingChange} withLabel />
          </div>
          <div className="flex w-full mb-4">
            <Input
              type="text"
              placeholder="脂が乗って美味しい"
              className="flex-grow rounded bg-muted px-4 py-2 text-slate-900"
              name="content"
              autoComplete="off"
            />
            <SubmitButton />
          </div>
        </form>
      </div>
      {state.error && (
        <p className="text-destructive mt-1 ml-14">{state.error}</p>
      )}
    </div>
  );
}
