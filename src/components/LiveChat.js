import React from 'react'

const LiveChat = ({data}) => {
  return (
    <div className='flex p-2 shadow-sm'>
        <div>
        <img className="inline h-6 mr-2" src="https://randomuser.me/api/portraits/men/34.jpg" alt="usericon"></img>
        <span className='font-semibold text-gray-700 text-sm'>{data.name}</span>
        </div>
        <div>
         <span className='ml-3 text-black text-sm font-normal items-center'>{data.message}</span>
        </div>
    </div>
  )
}

export default LiveChat