import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';

export const LeftBar = ({ type, setType }) => {
  const handleChange = (event, type) => {
    if (type !== null) {
      setType(type);
    }
  };

  return (
    <Box component="aside">
      <ToggleButtonGroup
        color="primary"
        value={type}
        exclusive
        onChange={handleChange}
        aria-label="Movies/Tv show"
      >
        <ToggleButton value="movie" aria-label="Movies">
          Movie
        </ToggleButton>
        <ToggleButton value="tv" aria-label="Tv shows">
          TV Show
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};
