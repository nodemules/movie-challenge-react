import axios from "axios";
import {TMDB_API_KEY_LOCAL_STORAGE_NAME} from "./ApiContext";

const TMDB_HOST_URL = "https://api.themoviedb.org/3"

axios.interceptors.request.use(config => {
    config.params['api_key'] = localStorage.getItem(TMDB_API_KEY_LOCAL_STORAGE_NAME)
    return config
})

export const searchByTitle = (title: string) =>
    axios.get(`${TMDB_HOST_URL}/search/movie`, {params: {query: title}})
    .then(response => response.data)
