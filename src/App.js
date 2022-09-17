import { Box } from '@mui/material';
import { Details, Navbar, Container } from './components';
import { Home, Movies, TvShows  } from './pages';

import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container>
          <Box sx={{
            minHeight:'100vh',
            bgcolor: theme => theme.palette.mode === 'light'
                              ? theme.palette.grey[200] : '#263238' }}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/top-rated/:id" element={<Details />} />
              <Route path='/movies' element={<Movies/>}/>
              <Route path='/tv-shows' element={<TvShows/>}/>
            </Routes>

          </Box>
        </Container>
      </LocalizationProvider>
    </Provider>
  );
}

export default App;
