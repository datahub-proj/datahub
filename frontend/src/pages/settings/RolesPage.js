import { Box } from '@mui/material';
import { Breadcrumb } from 'components';
import { AppContainer } from 'styles/components/Container';

const RolesPage = () => {
  return (
    <AppContainer>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: '설정', path: '/settings' },
            { name: '권한', path: '/settings/permissions' },
            { name: '역할' }
          ]}
        />
      </Box>
    </AppContainer>
  );
};

export default RolesPage;
