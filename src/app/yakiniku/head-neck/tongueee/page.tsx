import { notFound } from "next/navigation";
import { fetchMeatParts } from "@/lib/part/partService";
import { ImageComponent } from "@/app/components/ImageComponent";

export default async function Page({ params }: { params: { name: string } }) {
  // const { userId } = await auth();

  const meatParts = await fetchMeatParts();
  console.log(params);

  const part = meatParts.find((part) => part.name === "tongue");
  if (!part) {
    return notFound();
  }

  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3 md:pl-6">
        <div className="bg-white shadow-md rounded mt-4 w-full flex justify-center items-center">
          <ImageComponent src="/cattle_y_head.svg" />
        </div>
        <div className="bg-white shadow-md rounded p-4 mt-4 w-full">
          <h1 className="font-bold text-gray-950 text-xl md:text-2xl mb-2">
            {part.name}
          </h1>
          <p className="text-gray-800">{part.description}</p>
          <ul className="font-bold text-teal-950 my-2">
            <li>柔らかさ: {part.softness}</li>
            <li>脂肪分: {part.fat}</li>
            <li>希少度: {part.rare}</li>
            <li>用途: {part.YorO}</li>
            <li>部位の位置: {part.position}</li>
            <li>英語名: {part.engName}</li>
          </ul>
        </div>
      </section>
      <section className="w-full md:w-1/3 flex flex-col items-center px-3 md:pr-6">
        {/* <PostList /> */}
      </section>
    </div>
  );
}
