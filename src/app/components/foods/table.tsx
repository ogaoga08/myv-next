import Image from "next/image";
import { formatCurrency } from "@/app/lib/utils";
import { fetchFilteredFoods } from "@/app/lib/data";

export default async function FoodsTable({ query }: { query: string }) {
  const foods = await fetchFilteredFoods(query);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {foods?.map((food) => (
              <div
                key={food.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{food.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{food.category}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(food.price)}
                    </p>
                    <p>{food.calories} calories</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Food
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Category
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Price
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Calories
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {foods?.map((food) => (
                <tr
                  key={food.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{food.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {food.category}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(food.price)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {food.calories} calories
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
