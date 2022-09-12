import { apiRequest } from '../../utils/api';
import { FETCH_UPCOMING_REQUEST, FETCH_UPCOMING_SUCCESS, FETCH_UPCOMING_FAILURE } from './types';

const fetchUpcomingRequest = () => {
  return { type: FETCH_UPCOMING_REQUEST };
};

const fetchUpcomingSuccess = (data) => {
  return { type: FETCH_UPCOMING_SUCCESS, payload: data };
};

const fetchUpcomingFailure = (error) => {
  return { type: FETCH_UPCOMING_FAILURE, payload: error.message };
};

export const fetchUpcomingMovies = () => {
  return (dispatch) => {
    dispatch(fetchUpcomingRequest());

    try {
      apiRequest
        .get('/movie/upcoming')
        .then((res) => dispatch(fetchUpcomingSuccess(res.data.results)));
    } catch (error) {
      dispatch(fetchUpcomingFailure(error.message));
    }
  };
};
