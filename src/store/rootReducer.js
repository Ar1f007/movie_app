import { combineReducers } from 'redux';
import topRatedMoviesTvShowsReducer from './topRatedMoviesTvShows/reducer';
import trendingMoviesTVPersonReducer from './trending/reducer';
import upcomingMoviesReducer from './upcomingMovies/reducer';
import addMovieTvShowsReducer from './movie_tv/reducer';
import themeReducer from './theme/reducer';;

const rootReducer = combineReducers({
  topRated: topRatedMoviesTvShowsReducer,
  trending: trendingMoviesTVPersonReducer,
  upcomingMovies: upcomingMoviesReducer,
  moviesTvShows: addMovieTvShowsReducer,
  theme: themeReducer
});

export default rootReducer;
