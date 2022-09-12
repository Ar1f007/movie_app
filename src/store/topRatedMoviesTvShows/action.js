import { apiRequest } from '../../utils/api';
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './types';

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

export const fetchData = (type) => {
  return (dispatch) => {
    dispatch(fetchDataRequest());

    try {
      apiRequest.get(`/${type}/top_rated`).then((res) => {
        dispatch(fetchDataSuccess(res.data.results));
      });
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};
