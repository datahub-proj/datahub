import { Box } from '@mui/material';
import { Breadcrumb } from 'components';
import { AppContainer } from 'styles/components/Container';

const LogPage = () => {
  return (
    <AppContainer>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: '시스템', path: '/system/log' }, { name: '로그' }]} />
      </Box>
    </AppContainer>
  );
};

export default LogPage;
