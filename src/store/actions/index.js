import fetch from 'cross-fetch';

export const GET_LIST_MOVIES = 'LIST_MOVIES';
export const GET_LIST_TV_SHOW = 'LIST_TV_SHOW';
export const GET_MOVIE_BY_ID = 'MOVIE_BY_ID';
export const GET_TV_SHOW_BY_ID = 'TV_SHOW_BY_ID';
export const GET_LIST_POPULAR_MOVIES = 'LIST_POPULAR_MOVIES';
export const GET_LIST_TOP_RATED_MOVIES = 'LIST_TOP_RATED_MOVIES';
export const GET_LIST_NOW_PLAYING_MOVIES = 'LIST_NOW_PLAYING_MOVIES';
export const GET_LIST_POPULAR_TV_SHOW = 'LIST_POPULAR_TV_SHOW';
export const GET_LIST_TOP_RATED_TV_SHOW = 'LIST_TOP_RATED_TV_SHOW';
export const GET_LIST_AIRING_TODAY_TV_SHOW = 'LIST_AIRING_TODAY_TV_SHOW';
export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const SEARCH_TV_SHOW = 'SEARCH_TV_SHOW';

const LIST_MOVIES_API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=a2179cc6dc943669490ac581598b5f8b&language=ru-RU';
const LIST_TV_SHOW_API_URL = 'https://api.themoviedb.org/3/discover/tv?api_key=a2179cc6dc943669490ac581598b5f8b&language=ru-RU';
const LIST_MOVIES_POPULAR_API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=a2179cc6dc943669490ac581598b5f8b&language=ru-RU&page=1';
const LIST_MOVIES_TOP_RATED_API_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a2179cc6dc943669490ac581598b5f8b&language=ru-RU&page=1';
const LIST_MOVIES_NOW_PLAYING_API_URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=a2179cc6dc943669490ac581598b5f8b&language=ru-RU&page=1';
const LIST_TV_SHOW_POPULAR_API_URL = 'https://api.themoviedb.org/3/tv/popular?api_key=a2179cc6dc943669490ac581598b5f8b&language=ru-RU&page=1';
const LIST_TV_SHOW_TOP_RATED_API_URL = 'https://api.themoviedb.org/3/tv/top_rated?api_key=a2179cc6dc943669490ac581598b5f8b&language=ru-RU&page=1';
const LIST_TV_SHOW_AIRING_TODAY_API_URL = 'https://api.themoviedb.org/3/tv/airing_today?api_key=a2179cc6dc943669490ac581598b5f8b&language=ru-RU&page=1';

export function getListMovies() {
    return async (dispatch) => {
        const listMovies = await (await fetch(LIST_MOVIES_API_URL)).json();

        dispatch({
            type: GET_LIST_MOVIES,
            payload: {
                listMovies
            }
        });
    }
}

export function getListTvShow() {
    return async (dispatch) => {
        const listTvShow = await (await fetch(LIST_TV_SHOW_API_URL)).json();
       
        dispatch({
            type: GET_LIST_TV_SHOW,
            payload: {
                listTvShow
            }
        });
    }
}

export function getMovieById(id) {
    return async (dispatch) => {
        const MOVIE_BY_ID_API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=a2179cc6dc943669490ac581598b5f8b&language=en-US`;
        const movieById = await (await fetch(MOVIE_BY_ID_API_URL)).json();
        
        dispatch({
            type: GET_MOVIE_BY_ID,
            payload: {
                movieById
            }
        });
    }
}

export function getTvShowById(id) {
    return async (dispatch) => {
        const TV_SHOW_BY_ID_API_URL = `https://api.themoviedb.org/3/tv/${id}?api_key=a2179cc6dc943669490ac581598b5f8b&language=en-US`;
        const tvShowById = await (await fetch(TV_SHOW_BY_ID_API_URL)).json();
        
        dispatch({
            type: GET_TV_SHOW_BY_ID,
            payload: {
                tvShowById
            }
        });
    }
}

export function getListPopularMovies() {
    return async (dispatch) => {
        const listMovies = await (await fetch(LIST_MOVIES_POPULAR_API_URL)).json();
        
        dispatch({
            type: GET_LIST_POPULAR_MOVIES,
            payload: {
                listMovies
            }
        });
    }
}

export function getListTopRatedMovies() {
    return async (dispatch) => {
        const listMovies = await (await fetch(LIST_MOVIES_TOP_RATED_API_URL)).json();
        
        dispatch({
            type: GET_LIST_TOP_RATED_MOVIES,
            payload: {
                listMovies
            }
        });
    }
}

export function getListNowPlayingMovies() {
    return async (dispatch) => {
        const listMovies = await (await fetch(LIST_MOVIES_NOW_PLAYING_API_URL)).json();
        
        dispatch({
            type: GET_LIST_NOW_PLAYING_MOVIES,
            payload: {
                listMovies
            }
        });
    }
}

export function getListPopularTvShow() {
    return async (dispatch) => {
        const listTvShow = await (await fetch(LIST_TV_SHOW_POPULAR_API_URL)).json();
        
        dispatch({
            type: GET_LIST_POPULAR_TV_SHOW,
            payload: {
                listTvShow
            }
        });
    }
}

export function getListTopRatedTvShow() {
    return async (dispatch) => {
        const listTvShow = await (await fetch(LIST_TV_SHOW_TOP_RATED_API_URL)).json();
        
        dispatch({
            type: GET_LIST_TOP_RATED_TV_SHOW,
            payload: {
                listTvShow
            }
        });
    }
}

export function getListAiringTodayTvShow() {
    return async (dispatch) => {
        const listTvShow = await (await fetch(LIST_TV_SHOW_AIRING_TODAY_API_URL)).json();
        
        dispatch({
            type: GET_LIST_AIRING_TODAY_TV_SHOW,
            payload: {
                listTvShow
            }
        });
    }
}

export function searchMovie(query) {
    return async (dispatch) => {
        const SEARCH_MOVIE_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=a2179cc6dc943669490ac581598b5f8b&language=ru-RU&page=1&include_adult=false&query=${query}`;
        const listMovies = await (await fetch(SEARCH_MOVIE_API_URL)).json();
        
        dispatch({
            type: SEARCH_MOVIE,
            payload: {
                listMovies
            }
        });
    }
}

export function searchTvShow(query) {
    return async (dispatch) => {
        const SEARCH_TV_SHOW_API_URL = `https://api.themoviedb.org/3/search/tv?api_key=a2179cc6dc943669490ac581598b5f8b&language=ru-RU&page=1&include_adult=false&query=${query}`;
        const listTvShow = await (await fetch(SEARCH_TV_SHOW_API_URL)).json();
        
        dispatch({
            type: SEARCH_TV_SHOW,
            payload: {
                listTvShow
            }
        });
    }
}