import React from 'react'

const PanelVideo = ({data}) => {
    console.log(data)
  return (
    <div className='flex'>
        <div className='rounded p-2 w-40'>
            <img className='rounded w-40' src={data?.snippet?.thumbnails?.medium?.url}></img>
        </div>
        <div className='w-[50%] p-2'>
            <p className='text-xs'>{data?.snippet?.title.slice(0,70)}</p>
            <span className='font-semibold text-xs text-gray-500'>{data?.snippet?.channelTitle}</span>
        </div>
    </div>
  )
}

export default PanelVideo