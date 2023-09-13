import { Box } from '@mui/material';
import { Breadcrumb } from 'components';
import { AppContainer } from 'styles/components/Container';

const UserProfilePage = () => {
  return (
    <AppContainer>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: '계정관리' }]} />
      </Box>
    </AppContainer>
  );
};

export default UserProfilePage;
