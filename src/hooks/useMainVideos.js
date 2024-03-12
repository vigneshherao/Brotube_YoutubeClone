import { youtubeApi } from "../utils/contants";
import { useDispatch,useSelector } from "react-redux";
import { setVideos } from "../utils/videoSlice";
import { useEffect } from "react";

const useMainVideos = () => {

    const videos = useSelector((store) => store.video.videos);
    const dispatch = useDispatch();
    
    useEffect(() => {
      fetchVideos();
    }, []);
  
  
  
    const fetchVideos = async () => {
      const data = await fetch(youtubeApi);
      const jsonData = await data.json();
      dispatch(setVideos(jsonData.items));
      
    };

    return videos;
}

export default useMainVideos