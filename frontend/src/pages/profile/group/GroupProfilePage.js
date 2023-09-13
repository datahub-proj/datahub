import { Box } from '@mui/material';
import { Breadcrumb } from 'components';
import { AppContainer } from 'styles/components/Container';

const GroupProfilePage = () => {
  return (
    <AppContainer>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: '그룹' }]} />
      </Box>
    </AppContainer>
  );
};

export default GroupProfilePage;
