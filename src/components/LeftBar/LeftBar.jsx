import {
  Button,
  Modal,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Fade,
  Box,
  Backdrop } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useState } from 'react';
import {AddForm} from '..'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '90vw',
    md: '60vw',
    lg: 500
  },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export const LeftBar = ({ type, setType }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, type) => {
    if (type !== null) {
      setType(type);
    }
  };

  return (
    <Stack
        component="aside"
        direction="column"
        spacing={3}
        alignItems="center"
    >
      <ToggleButtonGroup
        color="primary"
        value={type}
        exclusive
        onChange={handleChange}
        aria-label="Movies/Tv show"
      >
        <ToggleButton
            value="movie"
            aria-label="Movies"
        >
          Movie
        </ToggleButton>
        <ToggleButton
            value="tv"
            aria-label="Tv shows"
        >
          TV Show
        </ToggleButton>
      </ToggleButtonGroup>

      <Button
          variant="contained"
          startIcon={<Add/>}
          onClick={handleOpen}
      >
        Add Movie / Tv shows
      </Button>
      <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      components={Backdrop}
      componentsProps={{
        timeout: 500
      }}
      aria-labelledby='add-movie-tv-show'
      aria-describedby='Add your favorite movie / tv show by filling out the form'
      >
        <Fade in={open}>
          <Box sx={style}>
              <AddForm />
          </Box>
        </Fade>
      </Modal>
    </Stack>
  );
};
