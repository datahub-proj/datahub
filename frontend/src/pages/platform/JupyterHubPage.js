import { Box } from '@mui/material';
import { Breadcrumb } from 'components';
import { AppContainer } from 'styles/components/Container';

const JupyterHubPage = () => {
  return (
    <AppContainer>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Jupyter Hub' }]} />
      </Box>
    </AppContainer>
  );
};

export default JupyterHubPage;
