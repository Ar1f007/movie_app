import { CardContent, CardMedia, Typography, Card as Container, Chip, Stack } from '@mui/material';

const baseURL = process.env.REACT_APP_IMAGE_BASE_PATH;

export const Card = ({ title, poster, avg_rating }) => {
  return (
    <Container sx={{ width: '100%' }}>
      <CardMedia component="img" height="240" image={`${baseURL}/${poster}`} alt={title} />
      <CardContent>
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <Typography gutterBottom variant="body1">
            {title}
          </Typography>
          <Chip label={avg_rating} color="primary" variant="filled" size="small" />
        </Stack>
      </CardContent>
    </Container>
  );
};
