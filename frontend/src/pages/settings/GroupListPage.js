import { Box } from '@mui/material';
import { Breadcrumb } from 'components';
import { AppContainer } from 'styles/components/Container';

const GroupListPage = () => {
  return (
    <AppContainer>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: '설정', path: '/settings' }, { name: '그룹' }]} />
      </Box>
    </AppContainer>
  );
};

export default GroupListPage;
