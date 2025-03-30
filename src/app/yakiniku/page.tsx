import React from "react";
import ChoiceButton from "../components/ChoiceButton";
import { ImageComponent } from "../components/ImageComponent";

const Yakiniku = () => {
  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3 md:pl-6">
        <div className="bg-white shadow-md rounded mt-4 w-full flex justify-center items-center">
          <ImageComponent src="/cattle_y.svg" />
        </div>
      </section>
      <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
        <ChoiceButton />
      </aside>
    </div>
  );
};

export default Yakiniku;
