import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ReactLoadingSkeleton from "react-loading-skeleton";

const TodoSkeleton = ({ n }) => {
  return Array(n)
    .fill(0)
    .map((_, i) => {
      return (
        <div
          key={i}
          className="flex hover:bg-oran-700 font-AlbertSans p-2 mx-6 my-5 border-2 border-gray-200 border-solid rounded-xl cursor-pointer relative"
        >
          <div className="m-2 pt-0.5">
            <ReactLoadingSkeleton width={24} height={24} />
          </div>
          <div className="mx-2 flex-grow">
            <div id="check" className="my-1">
              <ReactLoadingSkeleton height={24} />
            </div>
            <div className="flex gap-3 my-3">
              <ReactLoadingSkeleton width={24} height={24} />
              <ReactLoadingSkeleton width={24} height={24} />
              <ReactLoadingSkeleton width={100} height={24} />
            </div>
            <div className="mb-2">
              <ReactLoadingSkeleton width={100} height={24} />
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div>
              <ReactLoadingSkeleton width={50} height={24} />
            </div>
            <div>
              <ReactLoadingSkeleton width={50} height={24} />
            </div>
          </div>
        </div>
      );
    });
};

export default TodoSkeleton;
