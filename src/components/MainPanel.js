import React from 'react'
import ButtonList from './ButtonList'
import MainVideo from './MainVideo'
import MobileButtons from './MobileButtons'

const MainPanel = () => {
  return (
    <div className='col-span-10 mt-20'>
      <ButtonList/>
      <MobileButtons/>
      <MainVideo/>
    </div>
  )
}

export default MainPanel