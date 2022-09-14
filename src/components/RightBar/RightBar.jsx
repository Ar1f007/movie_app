import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTrending } from '../../store/trending/action';
import { Loader } from '..';
import { fetchUpcomingMovies } from '../../store/upcomingMovies/actions';

const baseURL = process.env.REACT_APP_IMAGE_BASE_PATH;

const style = {
  textTransform: 'capitalize',
  fontWeight: '500',
  textAlign: 'center',
  fontSize: {
    lg: 22,
    xs: 16,
  },
};

const RightBar = ({ trending, fetchTrending, upcomingMovies, fetchUpcomingMovies }) => {
  useEffect(() => {
    fetchTrending();
    fetchUpcomingMovies();
  }, [fetchTrending, fetchUpcomingMovies]);

  if (trending.loading) {
    return <Loader loading={trending.loading} />;
  }

  return (
    <Box component="aside">
      <Typography component="h3" sx={style}>
        Trending
      </Typography>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {trending.data.slice(0, 5).map((item) => (
          <Fragment key={item.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar variant="square" alt={item.title} src={`${baseURL}/${item.poster_path}`} />
              </ListItemAvatar>
              <ListItemText primary={item.title || 'N/A'} sx={{
                color: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[800]
              }}/>
            </ListItem>
            <Divider variant="inset" component="li" />
          </Fragment>
        ))}
      </List>

      <Typography component="h3" sx={style}>
        Upcoming Movies
      </Typography>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {upcomingMovies.data.slice(0, 5).map((item) => (
          <Fragment key={item.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar variant="square" alt={item.title} src={`${baseURL}/${item.poster_path}`} />
              </ListItemAvatar>
              <ListItemText primary={item.title || 'N/A'} secondary={item.release_date} sx={{
                color: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[800]
              }} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Fragment>
        ))}
      </List>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  trending: state.trending,
  upcomingMovies: state.upcomingMovies,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrending: () => dispatch(fetchTrending()),
    fetchUpcomingMovies: () => dispatch(fetchUpcomingMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RightBar);
