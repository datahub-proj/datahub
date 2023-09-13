import { Box } from '@mui/material';
import AppLogo from 'components/Logo';
import useSettings from 'hooks/useSettings';
import { BrandRoot, StyledSpan } from 'styles/components/Brand';

const Brand = ({ children }) => {
  const { settings } = useSettings();
  const leftSidebar = settings.layoutSettings.leftSidebar;
  const { mode } = leftSidebar;

  return (
    <BrandRoot>
      <Box display="flex" alignItems="center">
        <AppLogo />
        <StyledSpan mode={mode} className="sidenavHoverShow">
          Datahub
        </StyledSpan>
      </Box>
      <Box className="sidenavHoverShow" sx={{ display: mode === 'compact' ? 'none' : 'block' }}>
        {children || null}
      </Box>
    </BrandRoot>
  );
};

export default Brand;
