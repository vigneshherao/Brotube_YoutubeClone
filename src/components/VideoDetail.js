import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import { Link, useSearchParams } from "react-router-dom";

const VideoDetail = ({ data }) => {
    const [searchParams] = useSearchParams();
    let [comments,setComments] = useState([]);
    const [subscribe,setSubscribe] = useState(false);


    useEffect(()=>{
        fetchData();
    },[])

    let videoId = data.id? searchParams.get("v"):"vBQcU00U9O0";

    const fetchData = async () => {
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet%2Creplies&videoId=${searchParams.get("v")}&maxResults=500&key=AIzaSyBQRyqykU6NycYaiHRgjUIIG5OIRIsg_Pw`);
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
