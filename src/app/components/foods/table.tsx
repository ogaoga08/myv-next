import Image from "next/image";
import { fetchFilteredParts } from "@/data/parts";

export default async function PartsTable({ query }: { query: string }) {
  const parts = await fetchFilteredParts(query);

  if (!query) {
    return null; // queryが空の場合は何も表示しない
  }

  return (
    <div className="flex-1 rounded-lg bg-gray-50 p-2 shadow-md overflow-y-auto">
      {parts?.map((part) => (
        <div
          key={part.engname}
          className=" w-full bg-gray-50 p-3 flex items-center justify-between"
        >
          <div>
            <div className="flex items-center text-sm">
              <p className="font-bold text-gray-900">{part.name}</p>
              <p className="font text-sm text-gray-500 mx-2">{part.engname}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
