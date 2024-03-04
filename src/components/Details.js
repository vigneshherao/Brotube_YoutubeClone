import React, { useEffect, useState } from 'react';
import VideoDetail from './VideoDetail';

const Details = ({ id }) => {

  let [videoDetails,setVideoDetails] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=AIzaSyAzOh0ICGgTLiT9qj4IAuLxXrbpP1XupdI&id=${id}`);
            const jsonData = await response.json();
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
