import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Card } from '../components';
import { connect } from 'react-redux';

const Movies = ({movies}) => {
    let content;

    if(!movies.length){
        content = <Typography variant='h3' align='center'>No Movies</Typography>
    }
    else {
        content = <Grid container spacing={2} my={3} padding={{ xs: 2, lg: 0 }}>
            {
                movies.map(movie => (
                    <Grid
                        item
                        key={ movie.id }
                        xs={ 12 }
                        sm={ 12 }
                        md={ 6 }
                        lg={ 3 }
                        sx={ {
                            cursor: 'pointer',
                        } }
                    >
                        <Card
                            title={ movie.title }
                            poster={ movie.poster_path }
                            avg_rating={ movie.vote_average }
                        />
                    </Grid>
                ))
            }
        </Grid>

    }

    return (
        <Container maxWidth='xl' sx={{p: 5}}>
            { content }
        </Container>
    );
};

const mapStateToProps = (state) => {
   return {
       movies: state.moviesTvShows.movies
   }
}

export default connect(mapStateToProps)(Movies);