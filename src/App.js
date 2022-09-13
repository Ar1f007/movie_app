import { Box } from '@mui/material';
import { Details, Navbar } from './components';
import { Home } from './pages';

import { Provider } from 'react-redux';
import store from './store/store';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Box>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-rated/:id" element={<Details />} />
        </Routes>
      </Box>
    </Provider>
  );
}

export default App;
