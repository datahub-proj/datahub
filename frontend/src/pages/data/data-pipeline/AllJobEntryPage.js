import { Box } from '@mui/material';
import { Breadcrumb } from 'components';
import { AppContainer } from 'styles/components/Container';

const AllJobEntryPage = () => {
  return (
    <AppContainer>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: '데이터 파이프라인', path: '/data-pipeline' },
            { name: '연동신청 관리' }
          ]}
        />
      </Box>
    </AppContainer>
  );
};

export default AllJobEntryPage;
