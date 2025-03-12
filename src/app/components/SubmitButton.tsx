// 親コンポーネントがクライアントコンポーネントであるため、子もクライアントcp → useFormStatusを使用できる
import { Button } from "@/app/components/ui/button";
import { SendIcon } from "./Icons";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  // pendingがtrueの時はボタンを無効化する

  return (
    <>
      <Button
        type="submit"
        variant="ghost"
        size="icon"
        disabled={pending}
        className={`hover:bg-slate-200 ${pending && "cursor-not-allowed"}`}
      >
        {/* <span className="text-lg ml-6 font-bold text-gray-600">投稿</span> */}
        <SendIcon className="h-5 w-5 text-muted-foreground" />
      </Button>
    </>
  );
}
