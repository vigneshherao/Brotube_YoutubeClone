import { useEffect,useState } from "react";
import { youtubeApi } from "../utils/contants";

const useRightSide = () => {
    let [videos,setVideos] = useState([]);

    useEffect(()=>{
        fetchVideos();
    },[])

    const fetchVideos = async () => {
        const data = await fetch(youtubeApi);
        const jsonData = await data.json();
        setVideos(jsonData.items);
      };

    return videos;
}

export default useRightSide;