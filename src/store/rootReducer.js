import { combineReducers } from 'redux';
import topRatedMoviesTvShowsReducer from './topRatedMoviesTvShows/reducer';
import trendingMoviesTVPersonReducer from './trending/reducer';
import upcomingMoviesReducer from './upcomingMovies/reducer';

const rootReducer = combineReducers({
  topRated: topRatedMoviesTvShowsReducer,
  trending: trendingMoviesTVPersonReducer,
  upcomingMovies: upcomingMoviesReducer,
});

export default rootReducer;
