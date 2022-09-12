import { Backdrop, CircularProgress } from '@mui/material';
const style = {
  color: '#fff',
  zIndex: (theme) => theme.zIndex.drawer + 1,
};

export const Loader = ({ loading }) => {
  return (
    <Backdrop sx={style} open={loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
