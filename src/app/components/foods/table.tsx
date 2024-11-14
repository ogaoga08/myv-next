import Image from "next/image";
import { fetchFilteredParts } from "@/data/parts";

export default async function PartsTable({ query }: { query: string }) {
  const parts = await fetchFilteredParts(query);

  if (!query) {
    return null; // queryが空の場合は何も表示しない
  }

  return (
    <div className="mt-6 flow-root shadow">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0 shadow-md">
          {parts?.map((part) => (
            <div
              key={part.engname}
              className="mb-2 w-full rounded-md bg-white p-4"
            >
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <div className="mb-2 flex items-center">
                    <p className="font-extrabold text-gray-900">{part.name}</p>
                  </div>
                  <p className="font-bold text-sm text-gray-500">
                    {part.engname}
                  </p>
                </div>
              </div>
              <div className="flex w-full items-center justify-between pt-4">
                <div>
                  <p className="font-bold text-gray-800">
                    {part.descr.length > 20
                      ? part.descr.substring(0, 20) + "..."
                      : part.descr}
                  </p>
                </div>
              </div>
              <div className="flex w-full items-center justify-between pt-4">
                <div>
                  <p className="font-bold text-teal-950">
                    柔らかさ：{part.softness}
                  </p>
                </div>
              </div>
              <div className="flex w-full items-center justify-between pt-4">
                <div>
                  <p className="font-bold text-teal-950">脂の量：{part.fat}</p>
                </div>
              </div>
              <div className="flex w-full items-center justify-between pt-4">
                <div>
                  <p className="font-bold text-teal-950">希少度：{part.rare}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
