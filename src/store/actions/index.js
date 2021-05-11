import fetch from 'cross-fetch';

export const GET_LIST_MOVIES = 'LIST_MOVIES';
export const GET_LIST_TV_SHOW = 'LIST_TV_SHOW';

const LIST_MOVIES_API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=16139b178eb1a7b19183f92e5669361d&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=2';
const LIST_TV_SHOW_API_URL = 'https://api.themoviedb.org/3/tv/popular?api_key=a2179cc6dc943669490ac581598b5f8b&language=en-US&page=1';

export function getListMovies() {
    return async (dispatch) => {
        const listMovies = await (await fetch(LIST_MOVIES_API_URL)).json();
        console.log('listMovies222', listMovies);

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
        console.log('listTV222', listTvShow);

        dispatch({
            type: GET_LIST_TV_SHOW,
            payload: {
                listTvShow
            }
        });
    }
}