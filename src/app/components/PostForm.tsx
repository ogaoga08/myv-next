"use client";

import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Input } from "./ui/input";
import { SetStateAction, useRef, useState } from "react";
import { addPostAction } from "@/lib/actions";
import { SubmitButton } from "./SubmitButton";
import { useFormState } from "react-dom";
import Rating from "./Star";
import { Textarea } from "./ui/textarea";
import { ComboboxDemo } from "./Combobox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

export default function PostForm() {
  const initialState = {
    error: undefined,
    success: false,
  };
  // const [error, setError] = useState<string | undefined>("");
  const formRef = useRef<HTMLFormElement>(null); //入力欄のリセット用

  // useFormStateを使った書き方
  // サーバアクションを使う時に楽にバリデーションチェックができる(React15以降はuseActionState)

  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(3);
  const [selectedName, setSelectedName] = useState("");

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const handleNameChange = (value: string) => {
    setSelectedName(value);
  };

  // ratingの値を含めるために関数をラップする
  // ratingとselectedValueの値を含めるために関数をラップする
  const submitWithValues = async (prevState: any, formData: FormData) => {
    // ratingの値をFormDataに追加
    formData.append("rating", rating.toString());
    formData.append("selectedName", selectedName);
    const result = await addPostAction(prevState, formData);

    if (result.success) {
      // Close dialog on success
      setOpen(false);
    }

    return result;
  };

  const [state, formAction] = useFormState(submitWithValues, initialState);

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
    setRating(3);
    setSelectedName("");
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default" className="px-8 py-5 font-bold bg-rose-600">
            口コミを投稿
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="font-bold text-xl text-gray-900">
              口コミを投稿する
            </DialogTitle>
            <DialogDescription>
              みんなに美味しかった部位を紹介しましょう。
            </DialogDescription>
          </DialogHeader>

          <form ref={formRef} action={formAction} className="mt-4 space-y-6">
            <div className="space-y-4">
              <div className="z-50 relative">
                <ComboboxDemo onChange={handleNameChange} />
              </div>

              <div>
                <label
                  htmlFor="rating"
                  className="text-sm font-medium block mb-2"
                >
                  評価
                </label>
                <div className="mb-4 px-3">
                  <Rating star={rating} onChange={handleRatingChange} />
                </div>
              </div>

              <div>
                <label
                  htmlFor="content"
                  className="text-sm font-medium block mb-2"
                >
                  感想
                </label>
                <Textarea
                  id="content"
                  placeholder="脂が乗って美味しい！"
                  className="w-full bg-muted text-slate-900"
                  name="content"
                  autoComplete="off"
                  rows={4}
                />
              </div>
            </div>

            {state.error && (
              <p className="text-destructive font-medium text-sm">
                {state.error}
              </p>
            )}

            <DialogFooter>
              <SubmitButton />
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
