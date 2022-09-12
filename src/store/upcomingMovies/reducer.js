import { FETCH_UPCOMING_FAILURE, FETCH_UPCOMING_REQUEST, FETCH_UPCOMING_SUCCESS } from './types';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UPCOMING_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_UPCOMING_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case FETCH_UPCOMING_FAILURE:
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
