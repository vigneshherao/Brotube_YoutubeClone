import React from 'react'

const PanelVideo = ({data}) => {
  return (
    <div className='flex'>
        <div className='rounded  w-40'>
            <img className='rounded' src={data?.snippet?.thumbnails?.medium?.url}></img>
        </div>
        <div className='w-[50%] p-2'>
            <p className='text-[10px]'>{data?.snippet?.title.slice(0,70)}</p>
            <span className='font-semibold text-[8px] text-gray-500'>{data?.snippet?.channelTitle}</span>
        </div>
    </div>
  )
}

export default PanelVideo