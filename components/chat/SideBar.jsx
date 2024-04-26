import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";

const SideBar = () => {
  return (
    <div className="border-r p-4 border-white flex h-screen flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
    </div>
  );
};

export default SideBar;
