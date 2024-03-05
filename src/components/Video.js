import React from "react";

const Video = ({ data }) => {
  let { url } = data?.snippet?.thumbnails?.medium;
  let { logo } = data?.snippet?.thumbnails?.default;
  let { channelTitle, title } = data?.snippet;

  return (
    <div className="m-4 w-72 shadow-sm rounded-sm leading-3">
      <img className="rounded-lg shadow-md" src={url}></img>
      <p className="font-semibold text-sm mt-2">{title}</p>
      <p className="text-sm text-gray-700">{channelTitle}</p>
      <span className="text-sm text-gray-700">3.4M views 19 hours ago</span>
    </div>
  );
};

export default Video;
