
const googleApiKey = "AIzaSyBQRyqykU6NycYaiHRgjUIIG5OIRIsg_Pw";
export const commentsAPi = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet%2Creplies&videoId=Ce_-2Dj4Qcg&maxResults=500&key=AIzaSyBQRyqykU6NycYaiHRgjUIIG5OIRIsg_Pw";
export const youtubeApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${googleApiKey}`;
export const rightVideoApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=1&key=${googleApiKey}`;

export const searchApi = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


export const buttonApi = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=";

export const keyApi = "&key=AIzaSyBQRyqykU6NycYaiHRgjUIIG5OIRIsg_Pw";

export const namesOfButton = [
    "All", "Music", "Mixes", "Game Shows", "Live", "Train", "India", "Cooking",
    "Swiggy", "Circus", "Water", "English", "Bangalore", "Sky", "Fashion", "Dj",
    "Podcast", "Gym", "Cars"
  ];
export  const namesOfButtonScreen = [ "Music", "Mixes", "Game Shows", "Live", "Train", "India", "Cooking"];

  export const details = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=AIzaSyBQRyqykU6NycYaiHRgjUIIG5OIRIsg_Pw&id=";