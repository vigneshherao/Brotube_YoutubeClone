
const googleApiKey = "AIzaSyD7WMIin5c8tH9ssVi9Q8Eqi6hxKXA-cLg";
export const commentsAPi = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet%2Creplies&videoId=Ce_-2Dj4Qcg&maxResults=500&key=AIzaSyD7WMIin5c8tH9ssVi9Q8Eqi6hxKXA-cLg";
export const youtubeApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${googleApiKey}`;
export const rightVideoApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=1&key=${googleApiKey}`;

export const searchApi ="https://api.codetabs.com/v1/proxy?quest=" + encodeURIComponent("https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=");


export const buttonApi = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=";

export const keyApi = "&key=AIzaSyD7WMIin5c8tH9ssVi9Q8Eqi6hxKXA-cLg";

export const namesOfButton = [
    "All", "Music", "Mixes", "Game Shows", "Live", "Train", "India", "Cooking",
    "Swiggy", "Circus", "Water", "English", "Bangalore", "Sky", "Fashion", "Dj",
    "Podcast", "Gym", "Cars"
  ];
export  const namesOfButtonScreen = [ "Music", "Mixes", "Game Shows", "Live", "Train", "India", "Cooking"];

  export const details = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=AIzaSyD7WMIin5c8tH9ssVi9Q8Eqi6hxKXA-cLg&id=";