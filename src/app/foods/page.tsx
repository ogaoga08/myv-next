import Search from "@/app/ui/search";
import FoodsTable from "@/components/foods/table";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";

  return (
    <div className="w-full px-10">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Food Menu</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search foods..." />
      </div>
      <FoodsTable query={query} />
    </div>
  );
}
