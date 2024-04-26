import React, { useState } from "react";
import Todoinfo from "./Todoinfo";
import Tasktype from "./Tasktype";

const DoneTodo = ({ onToggleCompleted, todo }) => {
  return (
    <div className="flex shadow-md bg-[#f6f6f6] font-AlbertSans p-2 mx-6 my-5 border-2 border-gray-200 border-solid cursor-pointer rounded-xl" onClick={onToggleCompleted} >
      <div className="m-2 pt-0.5">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-500"
            onClick={onToggleCompleted}
            checked
          />
        </label>
      </div>
      <div>
        <div id="check" className="my-1 ">
          <h2 className="mx-2 font-medium text-2xl line-through text-[#958fb3]">
            {todo.title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DoneTodo;
