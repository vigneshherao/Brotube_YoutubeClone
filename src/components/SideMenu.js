import React from "react";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";
import { Link } from "react-router-dom";

const SideMenu = () => {

  const isMenuOpen = useSelector(appStore => appStore.app.isMenuOpen)


  return !isMenuOpen? null:(
    <div className="col-span-1 p-2 mt-20">
      <div className="border-b-2 pl-3">
        <div className=" p-1 font-semibold bg-gray-200 rounded-md hover:text-gray-600"><Link to={"/"}>Home</Link></div>
        <div className=" p-1 font-semibold">Shorts</div>
        <div className=" p-1 font-semibold">Subscriptions</div>
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
