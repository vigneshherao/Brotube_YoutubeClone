
const googleApiKey = "AIzaSyBQRyqykU6NycYaiHRgjUIIG5OIRIsg_Pw";
export const commentsAPi = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet%2Creplies&videoId=Ce_-2Dj4Qcg&maxResults=500&key=AIzaSyBQRyqykU6NycYaiHRgjUIIG5OIRIsg_Pw";
export const youtubeApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=48&key=${googleApiKey}`;
export const rightVideoApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=1&key=${googleApiKey}`;

export const searchApi = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";