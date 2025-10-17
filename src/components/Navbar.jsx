import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Box, useTheme, useMediaQuery, IconButton, Menu, MenuItem
} from '@mui/material';
import { NavLink, Link as RouterLink, useNavigate } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircle from '@mui/icons-material/AccountCircle';

const navItems = [
  { label: '홈', path: '/', end: true },
  { label: '메일', path: '/mail' },
  { label: '서비스', path: '/services' },
  { label: '정보', path: '/info' },
];

const Navbar = ({ isLoggedIn }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavClick = (event) => {
    event.currentTarget.blur();
  };

  const handleAccountClick = () => {
    navigate(isLoggedIn ? '/account' : '/login');
  };

  return (
    <Box sx={{
      position: 'sticky',
      top: 16,
      zIndex: theme.zIndex.appBar,
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      px: 2, // Padding on the sides of the wrapper
    }}>
      <AppBar
        position="static" // The wrapper is sticky, the AppBar is static inside it
        sx={{
          width: '100%',
          maxWidth: '700px',
          background: 'rgba(145,210,255,0.122)', // Slightly darker and less transparent
          backdropFilter: 'blur(40px)', // Stronger blur
          boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
          borderRadius: '50px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Toolbar>
          <Typography variant="h6" component={RouterLink} to="/" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
            Hyfata
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleMenu}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    background: 'rgba(145,210,255,0.122)',
                    backdropFilter: 'blur(40px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                {navItems.map((item) => (
                  <MenuItem 
                    key={item.label} 
                    onClick={(e) => {
                      handleClose();
                      e.currentTarget.blur();
                    }}
                    component={item.external ? 'a' : NavLink} 
                    to={item.path}
                    href={item.path}
                    target={item.external ? '_blank' : '_self'}
                    sx={{
                      '&.active': {
                        textDecoration: 'underline',
                      }
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  component={NavLink}
                  to={item.path}
                  end={item.end}
                  onClick={handleNavClick}
                  href={item.external ? item.path : undefined}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  sx={{
                    fontWeight: 'bold',
                    minWidth: 'fit-content',
                    paddingX: '16px',
                    '&.active': {
                      textDecoration: 'underline',
                      textDecorationThickness: '2px',
                      textUnderlineOffset: '4px',
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
          <IconButton
            color="inherit"
            onClick={handleAccountClick}
            sx={{ ml: 1 }}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;