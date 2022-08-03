import axios from "axios";

export const ApiConfig = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    headers:{
        "Accept": "application/json",
        "Content-Type": "application/json",  
    }
});