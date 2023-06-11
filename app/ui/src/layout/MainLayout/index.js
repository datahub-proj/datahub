import React from 'react';
import { Outlet } from 'react-router-dom';

// material ui
import { Box } from '@mui/material';

// project import
import Drawer from './Drawer';
import Header from './Header';

const MainLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%'
      }}
    >
      <Header />
      <Drawer />
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
