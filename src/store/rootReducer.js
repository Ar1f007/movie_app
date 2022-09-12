import { combineReducers } from 'redux';
import topRatedMoviesTvShowsReducer from './topRatedMoviesTvShows/reducer';

const rootReducer = combineReducers({
  topRated: topRatedMoviesTvShowsReducer,
});

export default rootReducer;
