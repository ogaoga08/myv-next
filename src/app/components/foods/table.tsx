import Image from "next/image";
import { fetchFilteredParts } from "@/data/parts";

export default async function PartsTable({ query }: { query: string }) {
  const parts = await fetchFilteredParts(query);

  return (
    <div className="mt-6 flow-root shadow">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {parts?.map((part) => (
              <div
                key={part.engname}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p className="font-extrabold text-gray-900">
                        {part.name}
                      </p>
                    </div>
                    <p className="font-bold text-sm text-gray-500">
                      {part.engname}
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="font-bold text-gray-800">{part.descr}</p>
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
                    <p className="font-bold text-teal-950">
                      脂の量：{part.fat}
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="font-bold text-teal-950">
                      希少度：{part.rare}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-bold sm:pl-6">
                  部位名
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  詳細
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  柔らかさ
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  脂の量
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  希少度
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {parts?.map((part) => (
                <tr
                  key={part.engname}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p className="font-bold text-gray-700">{part.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <div className="flex items-center gap-3 font-bold text-gray-600">
                      {part.descr.length > 20
                        ? part.descr.substring(0, 20) + "..."
                        : part.descr}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 font-bold text-teal-950">
                    {part.softness}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 font-bold text-teal-950">
                    {part.fat}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 font-bold text-teal-950">
                    {part.rare}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
