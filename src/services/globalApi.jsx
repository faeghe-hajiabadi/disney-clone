import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "35d16b37fd182f5efbb2c739469b08b4";

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=35d16b37fd182f5efbb2c739469b08b4';
const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {
    getTrendingVideos,
    getMovieByGenreId
} ;
