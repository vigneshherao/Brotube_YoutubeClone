import React, { useEffect, useState } from 'react'
import { youtubeApi } from '../utils/contants';

import PanelVideo from './PanelVideo';


const RIghtSideVideo = () => {

    let [videos,setVideos] = useState([]);

    useEffect(()=>{
        fetchVideos();
    },[])

    const fetchVideos = async () => {
        const data = await fetch(youtubeApi);
        const jsonData = await data.json();
        setVideos(jsonData.items);
      };

  return (
    <div>
       {
        videos.map((video)=>{
            return <PanelVideo data={video}/>
        })
       }
    </div>
  )
}

export default RIghtSideVideo;