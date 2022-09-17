import React, { useState } from 'react';
import dayjs from 'dayjs';
import {
    Stack,
    TextField,
    Button,
    FormControl,
    FormLabel,
    InputLabel,
    Select,
    MenuItem, Rating
} from '@mui/material';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useDispatch } from 'react-redux';
import { addMovie, addTvShow } from '../../store/movie_tv/actions';
import { useNavigate } from 'react-router-dom';

const AddForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        title: '',
        overview:'',
        vote_average: 0,
        tagline: '',
        poster_path: ''
    });

    const [type, setType] = useState('');
    const [date, setDate] = useState(dayjs());

    const handleType = e => {
        setType(e.target.value)
    }

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        setValues(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const data = {...values, release_date: date}

        if(type === 'movie') {
            dispatch(addMovie(data));
            navigate('/movies');

        } else {
            dispatch(addTvShow(data));
            navigate('/tv-shows');
        }
    }

    return (
        <Stack rowGap={1} component='form' onSubmit={handleSubmit}>
            <TextField
                label='Title'
                name='title'
                required
                value={values.title}
                onChange={handleChange}
            />
            <TextField
                label='Overview'
                multiline
                maxRows={3}
                type='text'
                name='overview'
                required
                value={values.overview}
                onChange={handleChange}
            />
            <TextField
                label='Tagline'
                multiline
                maxRows={2}
                name='tagline'
                required
                value={values.tagline}
                onChange={handleChange}
            />

            <TextField
                label='Image link'
                name='poster_path'
                value={values.poster_path}
                onChange={handleChange}
                required
            />

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                    labelId="select-type"
                    id="select-type"
                    label="Type"
                    value={type}
                    onChange={handleType}
                >
                    <MenuItem value='movie'>Movie</MenuItem>
                    <MenuItem value='tv'>TV Show</MenuItem>
                </Select>
            </FormControl>

            <DesktopDatePicker
                label='Release Date'
                minDate={dayjs('2000-01-01')}
                onChange={(newValue) => { setDate(newValue) }}
                value={date}
                renderInput={
                    (params) => <TextField {...params} />
                }
            />

            <FormControl
                required
                sx={{
                    marginBottom: '10px'
                }}
            >
                <FormLabel sx={{fontSize: '16px'}}>Rating (1-10)</FormLabel>
                <Rating
                    name='vote_average'
                    defaultValue={7}
                    max={10}
                    precision={0.5}
                    value={values.vote_average}
                    onChange={handleChange}
                />
            </FormControl>

            <Button type='submit' variant='contained'>Submit</Button>
        </Stack>
    );
};

export default AddForm;
