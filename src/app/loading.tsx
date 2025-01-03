import React from "react";

const Loading = () => {
  return (
    <div
      className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center"
      style={{ background: "rgba(0, 0, 0, 0.3)" }}
    >
      <div className="bg-white border py-6 px-12 rounded-lg flex items-center flex-col">
        <div className="loader-dots block relative w-20 h-5 mt-2">
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-red-500"></div>
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-red-500"></div>
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-red-500"></div>
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-red-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
