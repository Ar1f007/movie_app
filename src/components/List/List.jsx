import { Typography, Box, Grid } from '@mui/material';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loader, Card } from '..';
import { fetchData } from '../../store/topRatedMoviesTvShows/action';

const style = {
  textTransform: 'capitalize',
  fontWeight: '500',
  textAlign: {
    xs: 'center',
    md: 'left',
  },
  fontSize: {
    lg: 22,
    xs: 16,
  },
  color: theme => theme.palette.mode === 'dark' ? '#fff' : '#000'
};

/**
 * Top rated movies/tv shows
 */

const List = ({ type, topRated, fetchData }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/top-rated/${id}`, {
      state: type,
    });
  };

  useEffect(() => {
    fetchData(type);
  }, [fetchData, type]);

  if (topRated.loading) {
    return <Loader loading={topRated.loading} />;
  }

  return (
    <Box component="section">
      <Typography component="h3" sx={style}>
        Popular {type === 'movie' ? 'movies' : 'tv shows'}
      </Typography>

      <Grid
          container
          spacing={2}
          my={3}
          padding={{
            xs: 2,
            lg: 0
          }}
      >
        {topRated.data.map((item) => (
          <Grid
            item
            key={item.id}
            xs={12}
            sm={12}
            md={6}
            lg={3}
            onClick={() => handleClick(item.id)}
            sx={{
              cursor: 'pointer',
            }}
          >
            <Card
                title={item.title}
                poster={item.poster_path}
                avg_rating={item.vote_average}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    topRated: state.topRated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (type) => dispatch(fetchData(type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
