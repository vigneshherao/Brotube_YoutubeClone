import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import Details from './Details';
import RIghtSideVideo from './RIghtSideVideo';
import ChatContainer from './ChatContainer';

const Watch = () => {

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();


  console.log(searchParams.get("v"));
  useEffect(()=>{
    dispatch(closeMenu());
  },[])

  return (
    <div className='flex pt-2 px-5 mt-20'>
      <div className='flex w-[98%]'>
      <div className='md:w-[100%] p-2 mx-2 my-5'>
      <iframe className='h-56 sm:h-[540px] rounded-md shadow-lg w-[100%]'  height="540"  src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <Details id={searchParams.get("v")}/>
      </div>
      </div>
      <div className='hidden md:py-1 mt-2 md:block'>
        <ChatContainer/>
        <RIghtSideVideo/>
      </div>
    </div>
  )
}

export default Watch