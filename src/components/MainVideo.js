import React, { useEffect, useState } from "react";
import { youtubeApi } from "../utils/contants";
import Video from "./Video";
import { Link } from "react-router-dom";

const MainVideo = () => {
  let [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(youtubeApi);
    const jsonData = await data.json();
    setVideos(jsonData.items);
  };

  return (
    <div className="flex flex-wrap  justify-center">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v="+video.id}>
          <Video key={video.id} data={video} />
        </Link>
      ))}
    </div>
  );
};

export default MainVideo;
