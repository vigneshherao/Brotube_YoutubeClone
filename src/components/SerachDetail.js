import React, { useEffect, useState } from 'react'

const SerachDetail = () => {

    const [details,setDetails] = useState([]);

    useEffect(()=>{
        setDetails();
    },[])

    const SerachDetail = async () =>{
        const newData = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=india%2015&key=AIzaSyAzOh0ICGgTLiT9qj4IAuLxXrbpP1XupdI")
        const jsonData1 = await newData.json();
        console.log(jsonData1);
    }   

  return (
    <div>SerachDetail</div>
  )
}

export default SerachDetail