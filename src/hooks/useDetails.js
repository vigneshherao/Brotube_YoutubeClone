import React from 'react'
import { useEffect ,useState} from 'react';
import { details } from '../utils/contants';

const useDetails = (id) => {

    let [videoDetails,setVideoDetails] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(details+id);
            const jsonData = await response.json();
            setVideoDetails(jsonData.items[0]);

        } catch (error) {
            console.error('Error fetching data:');
        }
    };


    return videoDetails;
}

export default useDetails