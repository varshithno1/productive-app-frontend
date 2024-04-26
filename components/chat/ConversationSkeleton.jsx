import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ConversationSkeleton = ({ n }) => {
  return Array(n)
    .fill(0)
    .map((_, i) => (
      <SkeletonTheme baseColor="#cacccf" highlightColor="#e6e3e3">
        <div className="flex justify-start  ">
          <div className="flex items-end gap-2.5 m-3 max-w-[1000px] w-[40%]">
            <Skeleton circle width={32} height={32} />
            <div
              className="flex flex-col w-full max-w-[600px] leading-1.5 p-4 border-gray-200 rounded-xl"
              style={{ overflowWrap: "break-word" }}
            >
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Skeleton width={100} height={20} />
                <Skeleton width={80} height={20} />
              </div>
              <Skeleton count={3} height={20} />
            </div>
          </div>
        </div>
        <div className="flex justify-end  ">
          <div className="flex items-end gap-2.5 m-3 max-w-[1000px] w-[40%]">
            <div
              className="flex flex-col w-full max-w-[600px] leading-1.5 p-4 border-gray-200 rounded-xl"
              style={{ overflowWrap: "break-word" }}
            >
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Skeleton width={100} height={20} />
                <Skeleton width={80} height={20} />
              </div>
              <Skeleton count={3} height={20} />
            </div>
            <Skeleton circle width={32} height={32} />
          </div>
        </div>
      </SkeletonTheme>
    ));
};

export default ConversationSkeleton;
