import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import { Link, useSearchParams } from "react-router-dom";
import useVideoDetails from "../hooks/useVideoDetails";

const VideoDetail = ({ data }) => {


    const [subscribe,setSubscribe] = useState(false);

    const comments = useVideoDetails();

  return (
    <div className="pt-1">
      <h2 className="font-bold text-lg from-neutral-500">
        {data?.snippet?.localized?.title}
      </h2>
      <p></p>
      <div className="flex justify-between my-2 items-center">
        <div>
        <Link to={"/"}> <span className="font-bold">{data?.snippet?.channelTitle}</span></Link>
        </div>
        <div>
          <button className="bg-black rounded-full p-2 text-white font-semibold" onClick={()=>{setSubscribe(!subscribe)}}>
              {subscribe? "Subscribed" : "Subscribe"}
          </button>
        </div>
      </div>
      <div className="bg-gray-100 p-3 mt-2 rounded-md">
        <p>Mar 3, 2024 #3 on Trending</p>
        <p>{data?.snippet?.localized?.title}</p><br/>
        <p>{data?.snippet?.localized?.description}</p><br/>
        <p>{data?.snippet?.localized?.description}</p>
        <p>
          #ishqmurshidep22 #HUMTV #BilalAbbasKhan #DurefishanSaleem #FarooqRind
          #AbdulKhaliqKhan #MoomalEntertainment #mdproductions #masterpaints
        </p>
      </div>
      <div>
        <h3 className="font-bold text-lg mt-2 my-2">{data?.statistics?.commentCount} Comments</h3>
        <hr></hr>
      </div>
      {
        comments.map((comment)=>{
           return <Comments key={comment.id} data={comment.snippet}/>
        })
      }
    </div>
  );
};

export default VideoDetail;
