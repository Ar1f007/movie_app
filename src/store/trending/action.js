import { apiRequest } from '../../utils/api';
import { FETCH_TRENDING_REQUEST, FETCH_TRENDING_SUCCESS, FETCH_TRENDING_FAILURE } from './types';

const fetchTrendingRequest = () => {
  return { type: FETCH_TRENDING_REQUEST };
};

const fetchTrendingSuccess = (data) => {
  return { type: FETCH_TRENDING_SUCCESS, payload: data };
};

const fetchTrendingFailure = (error) => {
  return { type: FETCH_TRENDING_FAILURE, payload: error.message };
};

export const fetchTrending = () => {
  return (dispatch) => {
    dispatch(fetchTrendingRequest());

    try {
      apiRequest
        .get('/trending/all/day')
        .then((res) => dispatch(fetchTrendingSuccess(res.data.results)));
    } catch (error) {
      dispatch(fetchTrendingFailure(error.message));
    }
  };
};
