
import { useEffect,useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useVideoDetails = () => {

    let [comments,setComments] = useState([]);
    const [searchParams] = useSearchParams();

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet%2Creplies&videoId=${searchParams.get("v")}&maxResults=500&key=AIzaSyD7WMIin5c8tH9ssVi9Q8Eqi6hxKXA-cLg`);
            const jsonData = await response.json();
            setComments(jsonData.items);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return comments;
}

export default useVideoDetails