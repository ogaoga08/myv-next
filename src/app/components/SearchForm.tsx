import React from "react";

const SearchForm = () => {
  return (
    <div className="m-4 flex flex-col">
      <form className="flex items-center">
        <input
          type="text"
          placeholder="検索..."
          className="w-full px-4 py-2 border rounded-l-md text-slate-800 outline-none"
        />
        <button
          type="submit"
          className="bg-slate-700 text-white rounded-r-md hover:bg-slate-600 focus:outline-none w-20 h-10"
        >
          検索
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
