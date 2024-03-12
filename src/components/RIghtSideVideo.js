import React, { useEffect, useState } from 'react'
import { youtubeApi } from '../utils/contants';

import PanelVideo from './PanelVideo';
import { Link } from 'react-router-dom';
import useRightSide from '../hooks/useRightSide';


const RIghtSideVideo = () => {

  const videos = useRightSide();

  return (
    <div>
       {
        videos.map((video)=>{
            return <Link key={video.id} to={"/watch?v="+video.id}><PanelVideo key={video.id} data={video}/></Link>
        })
       }
    </div>
  )
}

export default RIghtSideVideo;