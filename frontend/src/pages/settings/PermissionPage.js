import { Box } from '@mui/material';
import { Breadcrumb } from 'components';
import { AppContainer } from 'styles/components/Container';

const PermissionPage = () => {
  return (
    <AppContainer>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: '설정', path: '/settings' }, { name: '권한' }]} />
      </Box>
    </AppContainer>
  );
};

export default PermissionPage;
