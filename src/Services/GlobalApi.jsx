import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = "3db25ba94a07b4d65948e3ad06fd6339"


// const getTrendingVideos = axios.get(this.movieBaseUrl+"/trending/all/day?api_key"+api_key)
const getTrendingVideos = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`)
export default {
    getTrendingVideos
}