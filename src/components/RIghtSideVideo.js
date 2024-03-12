import React, { useEffect, useState } from 'react'
import { youtubeApi } from '../utils/contants';

import PanelVideo from './PanelVideo';
import { Link } from 'react-router-dom';


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
            return <Link key={video.id} to={"/watch?v="+video.id}><PanelVideo key={video.id} data={video}/></Link>
        })
       }
    </div>
  )
}

export default RIghtSideVideo;