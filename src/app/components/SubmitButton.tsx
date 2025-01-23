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
        className={`${pending && "cursor-not-allowed"}`}
      >
        <SendIcon className="h-5 w-5 text-muted-foreground" />
        <span className="sr-only">投稿</span>
      </Button>
    </>
  );
}
