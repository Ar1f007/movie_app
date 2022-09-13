import { Container } from '@mui/material';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { fetchDetails } from '../../store/topRatedMoviesTvShows/action';

const Details = ({ detail, fetchDetails }) => {
  const { id } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    fetchDetails(id, state);
  }, [id, state, fetchDetails]);

  console.log(detail);
  return <Container sx={{ py: 5 }}>{id}</Container>;
};

const mapStateToProps = (state) => {
  return {
    detail: state.topRated.detail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetails: (id, type) => dispatch(fetchDetails(id, type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
