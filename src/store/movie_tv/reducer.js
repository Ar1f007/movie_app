import { ADD_MOVIE, ADD_TV } from './types';

const initialState = {
    movies: [],
    tv_shows: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return {
                ...state,
                movies: [action.payload, ...state.movies]
            }
        case ADD_TV:
            return {
                ...state,
                tv_shows: [action.payload, ...state.tv_shows]
            }

        default:
            return state;
    }
}

export default reducer;