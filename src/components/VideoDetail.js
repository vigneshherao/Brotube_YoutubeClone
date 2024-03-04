import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import { commentsAPi } from "../utils/contants";

const VideoDetail = ({ data }) => {

    let [comments,setComments] = useState([]);
    useEffect(()=>{
        fetchData();
    },[])

    const id = "jgwHFrON9Q4";

    const fetchData = async () => {
        try {
            const response = await fetch(commentsAPi);
            const jsonData = await response.json();
            setComments(jsonData.items);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


  return (
    <div className="pt-1">
      <h2 className="font-bold text-lg from-neutral-500">
        {data?.snippet?.localized?.title}
      </h2>
      <div className="flex ">
        <div>
          <button className="bg-black rounded-full p-2 text-white font-semibold">
            Subscribe
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
        <h3 className="font-bold text-lg mt-2">12,414 Comments </h3>
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