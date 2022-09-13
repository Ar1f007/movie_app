import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        textAlign: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary">
          {'Copyright © '}
          <Link color="inherit">MovieApp</Link> {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
};