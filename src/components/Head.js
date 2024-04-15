import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { searchApi } from "../utils/contants";
import appStore from "../utils/appStore";
import { youtubeApi } from "../utils/contants";
import { cacheResult } from "../utils/searchSlice";
import { Link } from "react-router-dom";
import { setVideos } from "../utils/videoSlice";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setShowSuggestions] = useState([]);
  const [closeSearch, setCloseSearch] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((appStore) => appStore.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[search]) {
        setShowSuggestions(searchCache[search]);
      } else {
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

    dispatch(
      cacheResult({
        [search]: jsonData[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };


  const getSearchs = async (name) => {
    try {
      const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${name}&key=AIzaSyD7WMIin5c8tH9ssVi9Q8Eqi6hxKXA-cLg`);
      const newData = await data.json();
      dispatch(setVideos(newData.items));

    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
        <div className="md:flex justify-center items-center">
          <div className="">
            <div className="flex justify-center items-center relative">
              <input
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setCloseSearch(true)}
                value={search}
                className="p-2 w-[50%] rounded-l-full  sm:w-[600px] md:rounded-l-full  md:p-2 px-6 border border-gray-200"
                type="text"
              />
              <button className="rounded-r-full p-2 bg-gray-100 px-4 border border-gray-200">
                <i onClick={()=>getSearchs(suggestions)} className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            {closeSearch && suggestions.length > 0 && (
              <div>
                <div className="fixed bg-white py-2 px-4 border border-gray-300 rounded-lg w-[600px] z-[9999]">
                  <ul className="">
                    {suggestions.map((suggestion) => (
                      <li
                        onClick={() => (getSearchs(suggestion),setCloseSearch(false))}
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
      <div className="hidden sm:col-span-2 md:flex items-center justify-end">
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
