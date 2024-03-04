import React from 'react'

const Comments = ({data}) => {
  return (
    <div className='flex p-2 m-2'>
        <div>
             <img className='rounded-full w-8' src={data.authorProfileImageUrl}></img>
        </div>
        <div className='ml-2 pl-1'>
            <span className='font-semibold text-xs'>{data.authorDisplayName}</span>
            <p className='text-gray-700 text-sm'>{data.textDisplay}</p>
        </div>

    </div>
  )
}

export default Comments