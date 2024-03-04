
const googleApiKey = "AIzaSyAzOh0ICGgTLiT9qj4IAuLxXrbpP1XupdI";
export const commentsAPi = "https://youtube.googleapis.com/youtube/v3/comments?part=snippet&maxResults=50&parentId=UgzDE2tasfmrYLyNkGt4AaABAg&key=AIzaSyAzOh0ICGgTLiT9qj4IAuLxXrbpP1XupdI";
export const youtubeApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=48&key=${googleApiKey}`;
export const rightVideoApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=1&key=${googleApiKey}`;

