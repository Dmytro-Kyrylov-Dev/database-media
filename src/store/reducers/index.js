import * as moviesAndTvActions from '../actions/index';

const defaultState = {
    listMovies: [],
    listTvShow: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case moviesAndTvActions.GET_LIST_MOVIES:
            return{
              ...state,
              ...action.payload,  
            };
        case moviesAndTvActions.GET_LIST_TV_SHOW:
            return{
                ...state,
                ...action.payload,  
            };
        default:
            return state; 
    }
}