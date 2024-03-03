import React from 'react'
import ButtonList from './ButtonList'
import MainVideo from './MainVideo'

const MainPanel = () => {
  return (
    <div className='col-span-10'>
      <ButtonList/>
      <MainVideo/>
    </div>
  )
}

export default MainPanel