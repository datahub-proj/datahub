import { Box } from '@mui/material';
import { Breadcrumb } from 'components';
import { AppContainer } from 'styles/components/Container';

const DataCatalogPage = () => {
  return (
    <AppContainer>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: '데이터 카탈로그' }]} />
      </Box>
    </AppContainer>
  );
};

export default DataCatalogPage;
