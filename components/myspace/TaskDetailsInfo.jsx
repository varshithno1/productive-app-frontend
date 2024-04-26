import React from "react";

const TaskDetailsInfo = ({ title, label }) => {
  return (
    <div className="flex">
      <div className="w-[40vw] text-xl">{title}</div>
      <div className="w-[70vw]">{label}</div>
    </div>
  );
};

export default TaskDetailsInfo;
