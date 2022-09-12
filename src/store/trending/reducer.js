import { FETCH_TRENDING_FAILURE, FETCH_TRENDING_REQUEST, FETCH_TRENDING_SUCCESS } from './types';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRENDING_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TRENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case FETCH_TRENDING_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
