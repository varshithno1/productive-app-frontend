import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const MessageSkeleton = ({ n }) => {
  return (
    <>
      {Array(n)
        .fill(0)
        .map((_, i) => (
          <SkeletonTheme key={i} baseColor="#cacccf" highlightColor="#e6e3e3">
            <div className="flex m-1 py-3 px-5 rounded-lg items-center">
              <Skeleton circle width={60} height={60} className="mr-3" />
              <div className="flex items-center w-max">
                <div className="text-lg font-bold">
                  <Skeleton width={200} height={20} />
                  <Skeleton width={150} height={20} />
                </div>
              </div>
            </div>
          </SkeletonTheme>
        ))}
    </>
  );
};

export default MessageSkeleton;
