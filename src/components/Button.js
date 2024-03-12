import React from "react";
import { useDispatch } from "react-redux";
import { setVideos } from "../utils/videoSlice";

const Button = ({ name }) => {

  const dispatch = useDispatch();

  const getSearch = async ()=>{
    const data =await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${name}&key=AIzaSyBQRyqykU6NycYaiHRgjUIIG5OIRIsg_Pw`)
    const newData = await data.json();
    dispatch(setVideos(newData.items));
  }



  return (
    <div className="hidden sm:block sm:bg-gray-200 sm:px-2 rounded-md hover:bg-slate-400">
      <button onClick={()=>{getSearch(name)}}>{name}</button>
    </div>
  );
};

export default Button;
