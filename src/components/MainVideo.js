import React, { useEffect, useState } from 'react'
import { youtubeApi } from '../utils/contants';
import Video from "./Video"

const MainVideo = () => {

    let [videos,setVideos] = useState([]);


    useEffect(()=>{
        fetchVideos();
    },[])

    const fetchVideos = async ()=>{
        const data = await fetch(youtubeApi)
        const jsonData = await data.json();
        setVideos(jsonData.items);
        console.log(jsonData.items)
    }

  return (
    <div className='flex flex-wrap  justify-center'>
        {
            videos.map((video)=><Video key={video.id} data={video}/>)
        }
    </div>
  )
}

export default MainVideo