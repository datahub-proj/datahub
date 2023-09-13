import { Box } from '@mui/material';
import { Breadcrumb, AppCard } from 'components';
import React from 'react';
import { AppContainer } from 'styles/components/Container';

const UserListPage = () => {
  return (
    <AppContainer>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: '설정', path: '/settings' }, { name: '사용자 목록' }]}
        />
      </Box>

      <AppCard title="autocomplete combo"></AppCard>

      <Box py="12px" />

      <AppCard title="Asyncronous Autocomplete"></AppCard>

      <Box py="12px" />

      <AppCard title="Asyncronous Autocomplete"></AppCard>
    </AppContainer>
  );
};

export default UserListPage;
