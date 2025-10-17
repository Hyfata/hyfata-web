import React from 'react';
import { Box, Container } from '@mui/material';
import Navbar from './Navbar';

const Layout = ({ children, isLoggedIn }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar isLoggedIn={isLoggedIn} />
      <Container component="main" sx={{ flexGrow: 1, py: 3, mt: 2 }}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
