import React from 'react'
import SkeletonColor from './SkeletonColor'
let n = 44;
const Shimmer = () => {
  return (
<div className='flex flex-wrap justify-center'>
    {(() => {
        const elements = [];
        for (let i = 0; i <= n; i++) {
            elements.push(<SkeletonColor key={i}></SkeletonColor>);
        }
        return elements;
    })()}
</div>

  )
}

export default Shimmer