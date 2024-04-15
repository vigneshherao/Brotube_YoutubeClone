import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setVideos } from "../utils/videoSlice";

const SideMenu = () => {
  const isMenuOpen = useSelector((appStore) => appStore.app.isMenuOpen);

  const dispatch = useDispatch();

  const getSearch = async (name) => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${name}&key=AIzaSyD7WMIin5c8tH9ssVi9Q8Eqi6hxKXA-cLg`
    );
    const newData = await data.json();
    dispatch(setVideos(newData.items));
  };

  return !isMenuOpen ? null : (
    <div className="col-span-1 p-2 mt-20">
      <div className="border-b-2 pl-3">
        <div className=" p-1 font-semibold bg-gray-200 rounded-md hover:text-gray-600">
          <Link to={"/"}>Home</Link>
        </div>
        <div
          className=" p-1 font-semibold cursor-pointer  hover:text-gray-600"
          onClick={() => {
            getSearch("shorts");
          }}
        >
          Shorts
        </div>
        <div className=" p-1 font-semibold cursor-pointer  hover:text-gray-600">
          Popular
        </div>
      </div>
      <div className="border-b-2 pl-3 pt-2">
        <div className=" p-1 font-semibold">Your channel</div>
        <div className=" p-1 font-semibold">History</div>
        <div className=" p-1 font-semibold">Watch later</div>
      </div>
      <div className="border-b-2 pl-3 pt-2">
        <div className=" p-1 font-semibold">Trending</div>
        <div className=" p-1 font-semibold">Shopping</div>
        <div className=" p-1 font-semibold">Music</div>
        <div className=" p-1 font-semibold">Trending</div>
        <div className=" p-1 font-semibold">Shopping</div>
        <div className=" p-1 font-semibold">Music</div>
        <div className=" p-1 font-semibold">Trending</div>
        <div className=" p-1 font-semibold">Shopping</div>
        <div className=" p-1 font-semibold">Music</div>
      </div>
      <div className="border-b-2 pl-3 pt-2">
        <div className=" p-1 font-semibold">Trending</div>
        <div className=" p-1 font-semibold">Shopping</div>
        <div className=" p-1 font-semibold">Music</div>
        <div className=" p-1 font-semibold">Trending</div>
        <div className=" p-1 font-semibold">Shopping</div>
        <div className=" p-1 font-semibold">Music</div>
        <div className=" p-1 font-semibold">Trending</div>
        <div className=" p-1 font-semibold">Shopping</div>
        <div className=" p-1 font-semibold">Music</div>
      </div>
    </div>
  );
};

export default SideMenu;
