"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useEffect, useRef } from "react";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const scrollPosition = useRef(0);

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams || "");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    scrollPosition.current = window.scrollY; // 現在のスクロール位置を保存
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  useEffect(() => {
    window.scrollTo(0, scrollPosition.current); // スクロール位置を復元
  }, [searchParams]);

  return (
    <div className="relative flex flex-1 flex-shrink-0 m-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-none placeholder:text-gray-500 text-slate-800 shadow-sm"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams ? searchParams.get("query")?.toString() : ""}
        id="search"
        style={{ fontSize: "16px" }}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
