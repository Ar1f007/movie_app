import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import { Hero, LeftBar, RightBar, List } from '../components';

const stickyStyle = {
  position: {
    lg: 'sticky',
  },
  top: { lg: 10 },
};

export const Home = () => {
  const [selectedType, setSelectedType] = useState('movie');

  return (
    <Box component="main">
      <Hero />

      <Stack direction={{ xs: 'column', lg: 'row' }} spacing={5} my={8}>
        <Box flex={1} align="center">
          <Box sx={stickyStyle}>
            <LeftBar type={selectedType} setType={setSelectedType} />
          </Box>
        </Box>

        <Box flex={3}>
          <List type={selectedType} />
        </Box>

        <Box flex={1}>
          <Box sx={stickyStyle}>
            <RightBar />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
