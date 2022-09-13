import { apiRequest } from '../../utils/api';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_FAILURE,
  FETCH_DETAILS_REQUEST,
} from './types';

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
      apiRequest.get(`/${type}/popular`).then((res) => {
        dispatch(fetchDataSuccess(res.data.results));
      });
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

export const fetchDetailsRequest = (data) => {
  return { type: FETCH_DETAILS_REQUEST };
};

export const fetchDetailsSuccess = (data) => {
  return {
    type: FETCH_DETAILS_SUCCESS,
    payload: data,
  };
};

const fetchDetailsFailure = (error) => {
  return {
    type: FETCH_DETAILS_FAILURE,
    payload: error,
  };
};

export const fetchDetails = (id, type) => {
  return (dispatch) => {
    dispatch(fetchDetailsRequest());

    try {
      apiRequest.get(`/${type}/${id}`).then((res) => {
        dispatch(fetchDetailsSuccess(res.data));
      });
    } catch (error) {
      dispatch(fetchDetailsFailure(error.message));
    }
  };
};
