import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
      onChange={(e) => {
        // これ入れないとサイズが変わったあとに内容を削除したときなど動きがおかしい
        e.target.style.height = "auto";
        // 改行に合わせて高さを変える
        e.target.style.height = e.target.scrollHeight + "px";
      }}
      cols={50}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
