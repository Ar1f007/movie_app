import {
    ADD_MOVIE,
    ADD_TV
} from './types'

export const addMovie = (data) => {
    return {
        type: ADD_MOVIE,
        payload: data
    }
}

export const addTvShow = (data) => {
    return {
        type: ADD_TV,
        payload: data
    }
}