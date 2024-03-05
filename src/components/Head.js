import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { searchApi } from "../utils/contants";

const Head = () => {
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  let [closeSearch, setCloseSearch] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      suggestData();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const suggestData = async () => {
    const data = await fetch(searchApi + search);
    const jsonData = await data.json();
    setSuggestion(jsonData[1]);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col border py-3 shadow-md px-8">
      <div className="flex col-span-5 items-center">
        <img
          className="h-5 cursor-pointer"
          onClick={() => {
            toggleMenuHandler();
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
          alt="menu"
        ></img>
        <img
          className="h-5 ml-5 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          alt="youtubelogo"
        ></img>
      </div>
      <div className="col-span-8 ">
        <input
          className="w-1/2 px-3 border border-gray-300 py-1 rounded-l-2xl"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={()=>{
            setCloseSearch(true);
          }}
          onBlur={()=>{
            setCloseSearch(false);
          }}
        
        
        ></input>
        <button className="border border-gray-300 py-1 px-4 rounded-r-2xl bg-gray-50">
          🔍
        </button>
        {closeSearch && <div className="bg-gray-100 w-[450px]">
          {suggestion.map((data) => {
            return (
              <ul>
                <li className="border border-b-0 p-1">{"🔍 " + data}</li>
              </ul>
            );
          })}
        </div>}
      </div>
      <div className="flex col-span-2 items-center">
        <img
          className="h-7 m-auto cursor-pointer"
          src="https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/user-circle-512.png"
          alt="usericon"
        ></img>
      </div>
    </div>
  );
};

export default Head;
