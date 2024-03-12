import React from "react";
import SkeletonColor from "./SkeletonColor";


const Shimmer = () => {
  let n = 44;
  return (
    <div className="flex flex-wrap justify-center">
      {(() => {
        const elements = [];
        for (let i = 0; i <= n; i++) {
          elements.push(<SkeletonColor key={i}></SkeletonColor>);
        }
        return elements;
      })()}
    </div>
  );
};

export default Shimmer;
