import React from "react";

const Navbar = () => {
  return (
    <div className="p-8 font-AlbertSans border-b-[2px] border-x-0 border-t-0 border-solid border-gray-100">
      <div className="flex text-lg text-[#251d47] ">
        <div>General</div> <span className="text-[#aeafaf] px-3 ">•</span>
        <div>Todo</div>
      </div>
      <div className="font-semibold mt-2 text-4xl">Todo</div>
    </div>
  );
};

export default Navbar;
