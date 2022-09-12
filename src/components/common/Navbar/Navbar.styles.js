import { Box, IconButton, InputBase, Stack, styled, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const StyledStack = styled(Stack)(({ theme }) => ({
  gap: 30,
  [theme.breakpoints.up('xs')]: { display: 'none' },
  [theme.breakpoints.up('md')]: { display: 'flex' },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: '#fff',
  textDecoration: 'none',
}));

export const StyledNavLink = styled(NavLink)({
  color: 'inherit',
  textDecoration: 'none',
});

export const SearchBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: 5,

  [theme.breakpoints.down('md')]: { width: '14ch' },
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: theme.shape.borderRadius,
  padding: '0 20px',
  color: theme.palette.primary.contrastText,
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: { display: 'flex' },
}));
