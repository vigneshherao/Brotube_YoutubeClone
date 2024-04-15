import React, { useEffect } from "react";
import Video from "./Video";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useMainVideos from "../hooks/useMainVideos";

const MainVideo = () => {
  const videos = useMainVideos();

  if(videos.length === 0){
    return <Shimmer/>
  }

  return (
    <div className="flex flex-wrap justify-center">
      {videos.map((video) => (
        <Link key={video.id.videoId ? video.id.videoId : video.id} to={"/watch?v=" + (video.id.videoId ? video.id.videoId : video.id)}>
          <Video key={video.id.videoId ? video.id.videoId : video.id} data={video} />
        </Link>
      ))}
    </div>
  );
};

export default MainVideo;
