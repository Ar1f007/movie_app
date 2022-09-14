import React, { useState } from 'react';
import {createTheme} from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';


export const Container = ({children}) => {
    const { mode } = useSelector(state=> state.theme)

    const theme = createTheme({
        palette: {
            mode
        }
    })

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};
