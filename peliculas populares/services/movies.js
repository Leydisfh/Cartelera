import axios from "axios";

const key = import.meta.env.VITE_API_KEY;
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=es-Sp`; 

const getPopularMovies = ({page}) =>{
    return axios.get(url + `&page=${page}`)
}

export default getPopularMovies;