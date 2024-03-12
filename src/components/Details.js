import React, { useEffect, useState } from 'react';
import VideoDetail from './VideoDetail';
import { details } from '../utils/contants';
import useDetails from '../hooks/useDetails';

const Details = ({ id }) => {

   const videoDetails = useDetails(id);

    return (
        <div>
           <VideoDetail data = {videoDetails}/>
        </div>
    );
};

export default Details;
