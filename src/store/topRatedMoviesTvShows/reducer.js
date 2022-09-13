import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_FAILURE,
  FETCH_DETAILS_REQUEST,
} from './types';

const initialState = {
  loading: false,
  data: [],
  error: '',
  detail: null,
  detailErr: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case FETCH_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        detail: action.payload,
      };

    case FETCH_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        detail: '',
        detailErr: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
