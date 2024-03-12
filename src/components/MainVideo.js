import React, { useEffect, useState } from "react";
import { youtubeApi } from "../utils/contants";
import Video from "./Video";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useDispatch,useSelector } from "react-redux";
import { setVideos } from "../utils/videoSlice";

const MainVideo = () => {
  const videos = useSelector((store) => store.video.videos);

  console.log(videos)

  useEffect(() => {
    fetchVideos();
  }, []);

  const dispatch = useDispatch();

  const fetchVideos = async () => {
    const data = await fetch(youtubeApi);
    const jsonData = await data.json();
    dispatch(setVideos(jsonData.items));
    
  };

  if(videos.length==0){
    return <Shimmer/>
  }

  return (
    <div className="flex flex-wrap  justify-center">
      {videos.map((video) => (
     <Link key={video.id} to={"/watch?v=" + (video.id.videoId ? video.id.videoId : video.id)}>
          <Video key={video.id} data={video} />
        </Link>
      ))}
    </div>
  );
};

export default MainVideo;
