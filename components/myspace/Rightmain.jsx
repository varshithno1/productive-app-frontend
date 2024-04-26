import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MainHeading from "./MainHeading";
import Todocomp from "./Todocomp";
import useTodos from "../../hooks/useTodos";
import { useRecoilState } from "recoil";
import { currentTodosSelector } from "../../store/selectors";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import TodoSkeleton from "./TodoSkeleton";

const Rightmain = () => {
  const [currentTodos, setCurrentTodos] = useRecoilState(currentTodosSelector);
  const { todos, loading, error } = useTodos(); // Fetch todos

  return (
    <div className="w-full border-r-2">
      <div className="bg-white w-full h-[16rem] sticky top-0 z-50">
        <Navbar />
        <MainHeading />
      </div>
      <div
        className="w-full overflow-y-auto"
        style={{ maxHeight: `calc(100vh - 16rem)` }}
      >
        {loading && <TodoSkeleton n={4} />}
        {currentTodos.length === 0 && error && (
          <div className="flex m-10 p-10 justify-center items-center text-2xl font-semibold border rounded-xl">
            {error}
          </div>
        )}
        {!loading &&
          currentTodos.map((todo) => (
            <Todocomp
              key={todo._id}
              todo={todo}
              onClick={() => handleTodoClick(todo)}
            />
          ))}
      </div>
    </div>
  );
};

export default Rightmain;
