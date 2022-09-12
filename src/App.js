import { Box, Container } from '@mui/material';
import { Navbar } from './components';
import { Home } from './pages';

function App() {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="xl">
        <Home />
      </Container>
    </Box>
  );
}

export default App;
