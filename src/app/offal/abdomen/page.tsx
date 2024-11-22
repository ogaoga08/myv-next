import React from "react";
import Image from "next/image";
import ChoiceButton from "../../components/ChoiceButton";
import { ImageComponent } from "@/app/components/ImageComponent";

const page = () => {
  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3 md:pl-6">
        <div className="bg-white shadow-md rounded mt-4 w-full flex justify-center items-center">
          <ImageComponent src="/cattle_h_bowels.png" />
        </div>
      </section>
      <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
        <ChoiceButton />
      </aside>
    </div>
  );
};

export default page;
