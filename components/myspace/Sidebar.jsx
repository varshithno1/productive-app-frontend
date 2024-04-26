import React, { useEffect, useState } from "react";
import Sideoptions from "./Sideoptions";
import list from "/src/assets/list.svg";
import inbox from "/src/assets/inbox.svg";
import calender from "/src/assets/calender.svg";
import trash from "/src/assets/trash.svg";
import Sideheading from "./Sideheading";
import Sideprofile from "./Sideprofile";
import human from "/src/assets/huma.svg";
import left from "../../src/assets/leftarrow.svg";
import Signout from "./Signout";
import useUserDetails from "../../hooks/useUserDetails";
import SubscriptionInfo from "./SubscriptionInfo";
import { BsViewList } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { FiTrash2 } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const user = localStorage.getItem("user");
  const userObj = JSON.parse(user);
  const menuItems = [
    {
      path: "/myspace",
      label: "Todo",
      icon: <BsViewList />,
    },
    {
      path: "/chat",
      label: "Inbox",
      icon: <BiMessageSquareDetail />,
    },
    {
      path: "/calendar",
      label: "Calendar",
      icon: <HiOutlineCalendarDays />,
    },
    {
      path: "/trash",
      label: "Trash",
      icon: <FiTrash2 />,
    },
  ];
  return (
    <div className="h-full p-[1.5rem] flex flex-col justify-between relative z-9999">
      <div>
        {!userObj ? (
          <Sideprofile label={`User's Space`} icon={human} />
        ) : (
          <Sideprofile
            label={`${userObj.username}'s Space`}
            icon={userObj.profilePic}
          />
        )}
        <Sideheading label={"General"} />
        {/* <Sideoptions icon={list} label={"Todo"} />
        <Sideoptions icon={inbox} label={"Inbox"} />
        <Sideoptions icon={calender} label={"Calendar"} />
        <Sideoptions icon={trash} label={"Trash"} /> */}
        {menuItems.map((item, index) => (
          <NavLink to={item.path} key={index} className={"link"}>
            <Sideoptions icon={item.icon} label={item.label} />
          </NavLink>
        ))}
        <Sideheading label={"Task Progress"} />
      </div>

      <div className="mt-[160px]">
        <SubscriptionInfo />
      </div>

      <div className="">
        <Signout label={"Sign out"} icon={left} />
      </div>
    </div>
  );
};

export default Sidebar;
