import React from 'react'
import SidePanel from "./SideMenu";
import { Outlet } from 'react-router-dom';
import Head from './Head';

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
      <Head />
      <SidePanel/>
      <Outlet/>
    </div>
  )
}

export default Body