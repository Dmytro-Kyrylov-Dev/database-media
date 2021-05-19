import * as moviesAndTvActions from '../actions/index';

const defaultState = {
    listMovies: [],
    listTvShow: [],
    movieById: {},
    tvShowById: {}
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case moviesAndTvActions.GET_LIST_MOVIES:
            return {
              ...state,
              ...action.payload,  
            };
        case moviesAndTvActions.GET_LIST_TV_SHOW:
            return {
                ...state,
                ...action.payload,  
            };
        case moviesAndTvActions.GET_MOVIE_BY_ID:
            return {
                ...state,
                ...action.payload,  
        };
        case moviesAndTvActions.GET_TV_SHOW_BY_ID:
            return {
                ...state,
                ...action.payload,  
        };
        case moviesAndTvActions.GET_LIST_POPULAR_MOVIES:
            return {
                ...state,
                ...action.payload,  
        };
        case moviesAndTvActions.GET_LIST_TOP_RATED_MOVIES:
            return {
                ...state,
                ...action.payload,  
        };
        case moviesAndTvActions.GET_LIST_NOW_PLAYING_MOVIES:
            return {
                ...state,
                ...action.payload, 
        };
        case moviesAndTvActions.GET_LIST_POPULAR_TV_SHOW:
            return {
                ...state,
                ...action.payload,  
        };
        case moviesAndTvActions.GET_LIST_TOP_RATED_TV_SHOW:
            return {
                ...state,
                ...action.payload,  
        };
        case moviesAndTvActions.GET_LIST_AIRING_TODAY_TV_SHOW:
            return {
                ...state,
                ...action.payload, 
        };
        case moviesAndTvActions.SEARCH_MOVIE:
            return {
                ...state,
                ...action.payload, 
        };
        case moviesAndTvActions.SEARCH_TV_SHOW:
            return {
                ...state,
                ...action.payload, 
        };
        default:
            return state; 
    }
}