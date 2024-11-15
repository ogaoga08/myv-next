import Search from "@/app/ui/search";
import PartsTable from "@/app/components/foods/table";

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
      <div className="mt-4 flex items-center justify-between md:mt-8">
        <Search placeholder="部位名で検索..." />
      </div>
      <PartsTable query={query} />
    </div>
  );
}
