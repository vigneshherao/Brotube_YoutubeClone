import React from 'react'

const Button = ({name}) => {
  return (
    <div className='bg-gray-200 px-2 rounded-md'>
        <button>{name}</button>
    </div>
  )
}

export default Button