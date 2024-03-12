import React from "react";
import { useDispatch } from "react-redux";
import { setVideos } from "../utils/videoSlice";
import { buttonApi,keyApi } from "../utils/contants";

const Button = ({ name }) => {

  const dispatch = useDispatch();

  const getSearch = async (name)=>{
    const data =await fetch(buttonApi+name+keyApi)
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
