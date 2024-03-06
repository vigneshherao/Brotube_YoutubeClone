import React, { useEffect, useState } from 'react';
import VideoDetail from './VideoDetail';

const Details = ({ id }) => {

  let [videoDetails,setVideoDetails] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=AIzaSyBbVzjnDATW9nyGZ9hDyXLN9NQXmgA_zyE&id=${id}`);
            const jsonData = await response.json();
            const newData = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=india%2015&key=AIzaSyBbVzjnDATW9nyGZ9hDyXLN9NQXmgA_zyE")
            const jsonData1 = await newData.json();
            console.log(jsonData1)
            setVideoDetails(jsonData.items[0]);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
           <VideoDetail data = {videoDetails}/>
        </div>
    );
};

export default Details;
