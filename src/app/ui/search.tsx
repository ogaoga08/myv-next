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
    scrollPosition.current = window.scrollY; //useRefでスクロール位置を保持
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  useEffect(() => {
    window.scrollTo(0, scrollPosition.current); //useRefで保持したスクロール位置を再レンダリング後に渡してスクロール位置を保持
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
        autoComplete="off"
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      {/* <img
        src="/times-solid.svg"
        className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 cursor-pointer"
        onClick={() => handleSearch("")}
      /> */}
    </div>
  );
}
