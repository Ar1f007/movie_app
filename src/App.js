import { Box } from '@mui/material';
import { Navbar } from './components';
import { Home } from './pages';

import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Box>
        <Navbar />

        <Home />
      </Box>
    </Provider>
  );
}

export default App;
