import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Card } from '../components';
import { connect } from 'react-redux';

const TVShows = ({tv_shows}) => {
    let content;

    if (!tv_shows.length) {
        content = <Typography
                    variant='h3'
                    align='center'
                    sx={{
                        color: (theme) => theme.palette.mode === 'dark' ? '#fff' : '#000'
                    }}>
            No tv shows added yet
        </Typography>
    }
    else {
        content = <Grid container spacing={2} my={3} padding={{ xs: 2, lg: 0 }} minHeight='100vh'>
            {
                tv_shows.map(show => (
                    <Grid
                        item
                        key={ show.title }
                        xs={ 12 }
                        sm={ 12 }
                        md={ 6 }
                        lg={ 3 }
                        sx={{ cursor: 'pointer' }}
                    >
                        <Card
                            title={ show.title }
                            poster={ show.poster_path }
                            avg_rating={ show.vote_average }
                            custom_add={true}
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
        tv_shows: state.moviesTvShows.tv_shows
    }
}

export default connect(mapStateToProps)(TVShows);