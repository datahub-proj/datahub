import { Box } from '@mui/material';
import { Breadcrumb } from 'components';
import { AppContainer } from 'styles/components/Container';

const NewJobEntryPage = () => {
  return (
    <AppContainer>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: '데이터 파이프라인', path: '/data-pipeline/jobs' },
            { name: '신규 연동신청' }
          ]}
        />
      </Box>
    </AppContainer>
  );
};

export default NewJobEntryPage;
