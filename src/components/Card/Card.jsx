import { CardContent, Typography, Card as Container, Chip, Stack } from '@mui/material';
import Image from 'mui-image';
import dayjs from 'dayjs';
const baseURL = process.env.REACT_APP_IMAGE_BASE_PATH;

export const Card = ({ title, poster, avg_rating, custom_add = false, release_date }) => {
  return (
    <Container sx={{ width: '100%' }}>
      {/*<CardMedia*/}
      {/*    component="img"*/}
      {/*    width='100%'*/}
      {/*    image={ custom_add ?*/}
      {/*                      `${poster}` : `${baseURL}/${poster}` }*/}
      {/*    alt={title}*/}
      {/*    sx={{*/}
      {/*        objectFit: 'cover'*/}
      {/*    }}*/}
      {/*/>*/}
        <Image
            src={custom_add ? `${poster}` : `${baseURL}/${poster}`}
            width='100%'
            alt={title}
            fit='cover'
            loading='lazy'
            sx={{maxHeight: "270px"}}
        />
      <CardContent>
        <Stack
            direction="row"
            spacing={1}
            justifyContent="space-between"
        >
          <Typography gutterBottom variant="body1">
            {title}
          </Typography>
          <Chip
              label={avg_rating}
              color="primary"
              variant="filled" size="small"
          />
        </Stack>
          {
              !!custom_add &&
              <Typography variant='subtitle1'>
                  { dayjs(release_date).format('D MMM, YYYY') }
              </Typography>
          }
      </CardContent>
    </Container>
  );
};
