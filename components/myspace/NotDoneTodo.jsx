import React from "react";
import Todoinfo from "./Todoinfo";
import Tasktype from "./Tasktype";
import cal from "../../src/assets/calender.svg";
import comm from "../../src/assets/comments.svg";
import atta from "../../src/assets/attachment.svg";
import pencil from "../../src/assets/pencil.svg";
import del from "../../src/assets/delete.svg";
import { sidebarToggleState, taskDetailsState } from "../../store/atoms";
import { useRecoilState } from "recoil";
import useDeleteTodo from "../../hooks/useDeleteTodo";
import toast from "react-hot-toast";

const NotDoneTodo = ({ todo, onToggleCompleted }) => {
  const [sidebarToggle, setSidebarToggle] = useRecoilState(sidebarToggleState);
  const [taskDetails, setTaskDetails] = useRecoilState(taskDetailsState);

  const editHandle = () => {
    setSidebarToggle("edit");
    setTaskDetails(todo);
  };

  const formattedDueDate = new Date(todo.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const { deleteTodo } = useDeleteTodo();

  // deleteTodo(todo);
  const handleDelete = async () => {
    const { success, message } = await deleteTodo(todo);
    if (success) {
      toast.success(message);
      setSidebarToggle("none");
    } else {
      toast.error(message);
    }
  };

  return (
    <div className="flex hover:bg-oran-700 shadow-md font-AlbertSans p-2 mx-6 my-5 border-2 border-gray-200 border-solid rounded-xl cursor-pointer relative">
      <div className="m-2 pt-0.5">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-500"
            onClick={onToggleCompleted}
          />
        </label>
      </div>
      <div className="mx-2 flex-grow" onClick={onToggleCompleted}>
        <div id="check" className="my-1">
          <h2 className="font-medium text-2xl">{todo.title}</h2>
        </div>
        <div className="flex gap-3 my-3">
          {/* <Todoinfo label={"5"} svg={atta} /> */}
          {/* <span className="text-[#aeafaf]">•</span> */}
          {/* <Todoinfo label={"12"} svg={comm} /> */}
          {/* <span className="text-[#aeafaf]">•</span> */}
          <Todoinfo label={formattedDueDate} svg={cal} />
        </div>
        <div className="flex mb-2 gap-5">
          <Tasktype type={todo.taskTypeName} />
          <Tasktype type={todo.status} />
        </div>
      </div>
      <div className="flex gap-3 items-center">
        {/* <div className="flex items-center justify-center">
          <img src={pencil} className="h-[1.5vw]" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src={del} alt="" className="h-[1.5vw]" />
        </div> */}
        <div>
          <button
            type="button"
            className="focus:outline-none text-gray-700 bg-green-200 hover:bg-green-400 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-green-200 dark:hover:bg-green-400 dark:focus:ring-green-400"
            onClick={() => editHandle()}
          >
            Edit
          </button>
          <button
            type="button"
            className="focus:outline-none text-gray-700 bg-red-200 hover:bg-red-400 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-200 dark:hover:bg-red-400 dark:focus:ring-red-500"
            onClick={() => handleDelete()}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotDoneTodo;
