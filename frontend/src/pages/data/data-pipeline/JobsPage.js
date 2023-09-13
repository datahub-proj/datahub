import { Box } from '@mui/material';
import { Breadcrumb } from 'components';
import { AppContainer } from 'styles/components/Container';

const JobsPage = () => {
  return (
    <AppContainer>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: '데이터 파이프라인', path: '/data-pipeline/jobs' },
            { name: '작업 관리' }
          ]}
        />
      </Box>
    </AppContainer>
  );
};

export default JobsPage;
