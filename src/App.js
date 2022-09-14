import { Box } from '@mui/material';
import { Details, Navbar, Container } from './components';
import { Home, Movies, TvShows  } from './pages';

import { Provider } from 'react-redux';
import store from './store/store';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Box sx={{
          bgcolor: theme => theme.palette.mode === 'light' ? theme.palette.grey[200] : '#263238'
        }}>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top-rated/:id" element={<Details />} />
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/tv-shows' element={<TvShows/>}/>
          </Routes>

        </Box>
      </Container>
    </Provider>
  );
}

export default App;
