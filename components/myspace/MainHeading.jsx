import React from "react";
import circleplus from "../../src/assets/circleplus.svg";
import Currentdate from "./Currentdate";
import { IoMdAddCircleOutline } from "react-icons/io";
import { sidebarToggleState } from "../../store/atoms";
import { useRecoilState } from "recoil";

const MainHeading = () => {
  const [sidebarToggle, setSidebarToggle] = useRecoilState(sidebarToggleState);

  const newHandle = () => {
    setSidebarToggle("new");
  };

  return (
    <div className=" flex justify-between font-AlbertSans p-6">
      <div>
        <Currentdate />
        <div className="flex list-none mt-3 gap-4 text-xl">
          <a
            className="no-underline text-[#aeafaf] hover:no-underline hover:text-[#435eb8]"
            href="#"
          >
            List
          </a>
          <a
            className="no-underline text-[#aeafaf] hover:no-underline hover:text-[#435eb8]"
            href="#"
          >
            Board
          </a>
          <a
            className="no-underline text-[#aeafaf] hover:no-underline hover:text-[#435eb8]"
            href="#"
          >
            Timeline
          </a>
          <a
            className="no-underline text-[#aeafaf] hover:no-underline hover:text-[#435eb8]"
            href="#"
          >
            Calender
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="h-10 font-AlbertSans border-0 px-4 py-6 shadow-lg font-medium text-xl flex justify-center items-center gap-1 text-white bg-[#6161ff] rounded-xl hover:bg-[#4f4ff5] cursor-pointer"
          onClick={() => newHandle()}
        >
          {/* <img src={circleplus} className="h-5" /> */}
          <IoMdAddCircleOutline className="text-white" />
          New Tasks
        </button>
      </div>
    </div>
  );
};

export default MainHeading;
