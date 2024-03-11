import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { searchApi } from "../utils/contants";
import appStore from "../utils/appStore";
import { cacheResult } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setShowSuggestions] = useState([]);
  const [closeSearch, setCloseSearch] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((appStore)=>appStore.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[search]){
        setShowSuggestions(searchCache[search]);
      }
      else{
        suggestData();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const suggestData = async () => {
    const data = await fetch(searchApi + search);
    const jsonData = await data.json();
    setShowSuggestions(jsonData[1]);
    
    dispatch(cacheResult({
      [search]:jsonData[1],
    }))
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="fixed bg-white w-full grid grid-flow-col p-4 border-b border-gray-200 shadow-sm">
      <div className="col-span-2 md:col-span-1 flex items-center justify-start">
        <img
          className="h-5 cursor-pointer"
          onClick={() => {
            toggleMenuHandler();
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
          alt="menu"
        ></img>
        <Link to={"/"}>
        <img
          className="h-5 ml-5 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          alt="youtubelogo"
        ></img>
        </Link>
      </div>
      <div className="col-span-10 md:col-span-9 flex justify-end items-center md:block">
        <div className="sm:flex md:hidden sm:justify-center sm:items-center">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <div className="">
            <div className="flex justify-center items-center relative">
              <input
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setCloseSearch(true)}
                onBlur={() => setCloseSearch(false)}
                value={search}
                className="w-[600px] rounded-l-full p-2 px-6 border border-gray-200"
                type="text"
              />
              <button className="rounded-r-full p-2 bg-gray-100 px-4 border border-gray-200">
              <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            {closeSearch && suggestions.length > 0 && (
              <div>
                <div className="fixed bg-white py-2 px-4 border border-gray-300 rounded-lg w-[600px] z-[9999]">
                  <ul className="">
                    {suggestions.map((suggestion) => (
                      <li
                        key={suggestion}
                        className="hover:bg-gray-100 py-1 border-b border-gray-50 cursor-pointer flex"
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 flex items-center justify-end">
        <button className="border border-gray-200 rounded-full p-2 text-sm text-blue-600 flex justify-center items-center">
          <img
            className="h-7 m-auto cursor-pointer"
            src="https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/user-circle-512.png"
            alt="usericon"
          ></img>
          <span className="px-2 hidden md:inline">Sign in</span>
        </button>
      </div>
    </div>
  );
};

export default Head;
