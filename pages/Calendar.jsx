import React from "react";
import Sidebar from "../components/myspace/Sidebar";

const Calendar = () => {
  return (
    <>
      <div className="font-AlbertSans w-[20rem] left-0 top-0 fixed h-full bg-[#f3f4f6]">
        <Sidebar />
      </div>
      <div
        className="top-0 left-[20rem] h-full relative w-auto flex"
        style={{ width: `calc(100% - 20rem)` }}
      >
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&bgcolor=%23ffffff&src=c2hpdmFib2Noa2FyNTdAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4tZ2IuaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </>
  );
};

export default Calendar;
