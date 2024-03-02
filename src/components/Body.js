import React from 'react'
import SidePanel from "./SideMenu";
import MainPanel from "./MainPanel";

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
      <SidePanel/>
      <MainPanel/>
    </div>
  )
}

export default Body