import React from 'react'
import SidePanel from "./SideMenu";
import MainPanel from "./MainPanel";
import { Outlet } from 'react-router-dom';
import ShimmerUi from './SkeletonColor';
import Head from './Head';
import SkeletonColor from './SkeletonColor';

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