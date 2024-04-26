import React from "react";

const TaskInput = ({ title, label }) => {
  return (
    <div className="flex items-center">
      <div className="w-[40vw] text-2xl">{title}</div>
      <div className="w-[70vw]">{label}</div>
      <input
        type="time"
        id="time"
        class="leading-none border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        min="09:00"
        max="18:00"
        value="00:00"
        required
      />
    </div>
  );
};

export default TaskInput;
