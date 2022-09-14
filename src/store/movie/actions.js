import {
    ADD_MOVIE_REQUEST,
    ADD_MOVIE_SUCCESS,
    ADD_MOVIE_FAILURE
} from './types'

const addMovieRequest = () => {
    return {
        type: ADD_MOVIE_REQUEST
    }
}

const addMovieSuccess = data => {
    return {
        type: ADD_MOVIE_SUCCESS,
        payload: data
    }
}

// const addMovieFailure =