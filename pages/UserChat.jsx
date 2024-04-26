import React from "react";
import SideBar from "../components/chat/SideBar";
import MessagesContainer from "../components/chat/MessagesContainer";
import Sidebar from "../components/myspace/Sidebar";

const UserChat = () => {
  return (
    <>
      <div className="font-AlbertSans w-[20rem] left-0 top-0 fixed h-full bg-[#f3f4f6]">
        <Sidebar />
      </div>
      <div
        className="top-0 left-[20rem] h-full relative w-auto flex rounded-lg overgflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20"
        style={{ width: `calc(100% - 20rem)` }}
      >
        <div className="w-[27vw] min-w-[250px]">
          <SideBar />
        </div>
        <MessagesContainer />
      </div>
    </>
  );
};

export default UserChat;
