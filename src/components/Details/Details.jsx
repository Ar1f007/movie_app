import { Box, Container, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { fetchDetails } from '../../store/topRatedMoviesTvShows/action';
import { Loader } from '../common/Loader/Loader';

const baseURL = process.env.REACT_APP_IMAGE_BASE_PATH;

const Details = ({ detail, fetchDetails, fetching }) => {
  const { id } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    fetchDetails(id, state);
  }, [id, state, fetchDetails]);

  if (fetching) {
    return <Loader loading={fetching} />;
  }

  if (detail) {
    return (
      <Container sx={{ py: 5 }}>
        <Stack
          direction={{
            xs: 'column',
            lg: 'row',
          }}
          spacing={5}
        >
          <Box width="100%" maxWidth="300" flex={1}>
            <img src={`${baseURL}${detail?.poster_path}`} alt={detail.title} width="100%" />
          </Box>
          <Box flex={2}>
            <Stack>
              <Typography variant="h5">{detail.title}</Typography>
              <Typography variant="body2">
                {detail.genres
                  ?.map((genre) => <span key={genre.name}>{genre.name}</span>)
                  .reduce((prev, curr) => [prev, ', ', curr])}
              </Typography>

              <Typography component="i" variant="body2" my={3}>
                {detail.tagline}
              </Typography>

              <Typography variant="h5" mb={1}>
                Overview
              </Typography>

              <Typography variant="body2">{detail.overview}</Typography>

              <Typography variant="h6" mt={3}>
                Released
              </Typography>

              <Typography variant="body2">
                {new Date(detail.release_date).toLocaleDateString()}
              </Typography>

              <Typography variant="h6" mt={3}>
                Vote average
              </Typography>

              <Typography variant="body2">
                {detail.vote_average.toFixed(1)}
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Container>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    detail: state.topRated.detail,
    fetching: state.topRated.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetails: (id, type) => dispatch(fetchDetails(id, type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
