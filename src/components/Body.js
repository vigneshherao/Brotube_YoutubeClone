import React from 'react'
import SidePanel from "./SideMenu";
import MainPanel from "./MainPanel";
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
      <SidePanel/>
      <Outlet/>
    </div>
  )
}

export default Body