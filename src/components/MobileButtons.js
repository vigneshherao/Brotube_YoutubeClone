import React from 'react'
import { useDispatch } from 'react-redux';
import { setVideos } from '../utils/videoSlice';
import { namesOfButtonScreen } from '../utils/contants';


const MobileButtons = () => {

  const dispatch = useDispatch();

   const getSearch = async (name)=>{
        const data =await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${name}&key=AIzaSyD7WMIin5c8tH9ssVi9Q8Eqi6hxKXA-cLg`)
        const newData = await data.json();
        dispatch(setVideos(newData.items));
    }

  return (
    <div className='sm:hidden flex justify-evenly m-2'>
     {namesOfButtonScreen.map((btn, index) => (
      <div key={index} className="sm:block sm:bg-gray-200 sm:px-2 rounded-md hover:bg-slate-400">
      <button  onClick={()=>{getSearch(btn)}} className='block bg-gray-200 sm:px-2 rounded-md hover:bg-slate-400"'>{btn}</button>
      </div>
    ))}
  </div>
  )
}

export default MobileButtons