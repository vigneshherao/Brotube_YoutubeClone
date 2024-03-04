import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import Details from './Details';

const Watch = () => {

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(closeMenu());
  },[])

  return (
    <div className='col-span-10 pt-2 px-5'>
      <div className='w-[65%] p-2 m-5'>
      <iframe className='rounded-md shadow-lg' width="940" height="540" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <Details id={searchParams.get("v")}/>
      </div>
    </div>
  )
}

export default Watch