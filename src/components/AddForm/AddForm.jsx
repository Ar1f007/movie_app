import React, { useState } from 'react';
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

const marks = [
    {
        value: 0,
        label: 0
    },
    {
        value: 3,
        label: 3
    },
    {
        value: 7,
        label: 7
    },
    {
        value: 10,
        label: 10
    },
]

const AddForm = () => {
    const [values, setValues] = useState({
        title: '',
        overview:'',
        vote_average: 0,
        tagline: '',
        release_date: '',
    });

    const [type, setType] = useState('');
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

        console.log(values);
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

            <FormControl>
                <FormLabel required sx={{fontSize: '16px'}}>Release Date</FormLabel>
                <TextField
                type="date"
                name='release_date'
                required
                value={values.release_date}
                onChange={handleChange}
             />
            </FormControl>


            <FormControl required>
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