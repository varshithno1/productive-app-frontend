import React from "react";

const Attachbox = ({ title, date, icon }) => {
  return (
    <div className="flex-col w-1/3">
      <div className="border w-28 rounded-lg p-2 m-1">
        <div>Icon</div>
        <div>{title}</div>
        <div>{date}</div>
      </div>
    </div>
  );
};

export default Attachbox;
