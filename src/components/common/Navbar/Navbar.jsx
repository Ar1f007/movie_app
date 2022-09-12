import { AppBar, Box, Container, Menu, MenuItem, Stack, Typography } from '@mui/material';
import {
  StyledStack,
  StyledToolbar,
  StyledNavLink,
  SearchBox,
  StyledInputBase,
  StyledIconButton,
} from './Navbar.styles';
import { links } from '../../../utils/navLinks';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';

let activeStyle = {
  textDecoration: 'underline',
  fontWeight: 700,
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleCloseNavMenu = () => setOpen(false);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <StyledToolbar
          component="nav"
          disableGutters={{
            lg: true,
          }}
        >
          {/* logo */}
          <Box>
            <Typography variant="h6">MovieApp</Typography>
          </Box>
          {/* logo */}

          {/* Nav links */}
          <StyledStack direction="row">
            {links.map((link) => (
              <StyledNavLink
                key={link.name}
                to={link.path}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {link.name}
              </StyledNavLink>
            ))}
          </StyledStack>
          {/* Nav links */}

          <SearchBox>
            <StyledInputBase placeholder="search..." />
          </SearchBox>

          <StyledIconButton color="inherit" size="large" onClick={() => setOpen(!open)}>
            <MenuIcon />
          </StyledIconButton>

          <Menu
            id="menu-appbar"
            keepMounted
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleCloseNavMenu}
            sx={{
              mt: '45px',
              display: { xs: 'block', md: 'none' },
            }}
          >
            <Stack sx={{ width: '60vw' }}>
              {links.map((link) => (
                <MenuItem
                  key={link.name}
                  onClick={handleCloseNavMenu}
                  sx={{ justifyContent: 'center' }}
                >
                  <StyledNavLink
                    key={link.name}
                    to={link.path}
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  >
                    {link.name}
                  </StyledNavLink>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};
