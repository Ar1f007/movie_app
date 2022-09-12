import { Typography, Box, Grid } from '@mui/material';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Loader, Card } from '..';
import { fetchData } from '../../store/topRatedMoviesTvShows/action';

/**
 * Top rated movies/tv shows
 */
const List = ({ type, data, fetchData }) => {
  useEffect(() => {
    fetchData(type);
  }, [fetchData, type]);

  if (data.loading) {
    return <Loader loading={data.loading} />;
  }

  return (
    <Box component="section">
      <Typography
        component="h3"
        fontWeight="500"
        textTransform="capitalize"
        sx={{
          textAlign: {
            xs: 'center',
            md: 'left',
          },
          fontSize: {
            lg: 22,
            xs: 16,
          },
        }}
      >
        Top rated &mdash; {type === 'movie' ? 'movies' : 'tv shows'}
      </Typography>

      <Grid container spacing={2} my={3} padding={{ xs: 2, lg: 0 }}>
        {data.data.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={12} md={6} lg={3}>
            <Card title={movie.title} poster={movie.poster_path} avg_rating={movie.vote_average} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.topRated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (type) => dispatch(fetchData(type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
