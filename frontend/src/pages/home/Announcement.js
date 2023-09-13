import { Box } from '@mui/material';
import { Breadcrumb } from 'components';
import { AppContainer } from 'styles/components/Container';

const Announcement = () => {
  return (
    <AppContainer>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: '공지사항' }]} />
      </Box>
    </AppContainer>
  );
};

export default Announcement;
