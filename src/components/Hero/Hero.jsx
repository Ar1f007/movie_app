import { Box, Typography } from '@mui/material';

const style = {
  backgroundImage:
    'linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)),url(https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundColor: '#fff',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  height: '75vh',
  width: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
export const Hero = () => {
  return (
    <Box sx={style}>
      <Box
        sx={{
          width: {
            xs: '100%',
            lg: '40%',
          },

          opacity: '0.8',
          padding: {
            xs: 4,
            lg: 8,
            xl: 10,
          },
        }}
      >
        <Typography
          align="left"
          variant="h3"
          sx={{ fontWeight: 'bold', color: 'primary.contrastText' }}
        >
          Welcome.
        </Typography>

        <Typography
          align="left"
          component="p"
          variant="h6"
          sx={{ fontWeight: 100, color: 'primary.contrastText' }}
        >
          Millions of movies, TV shows and people to discover. Explore now.
        </Typography>
      </Box>
    </Box>
  );
};
