import React from "react";

const Comments = ({ des, name, time }) => {
  return (
    <div className="border rounded-lg p-2 bg-[#f6f6f6]">
      <div className="flex justify-between">
        <div>{name}</div>
        <div>{time}</div>
      </div>
      <div>{des}</div>
    </div>
  );
};

export default Comments;
