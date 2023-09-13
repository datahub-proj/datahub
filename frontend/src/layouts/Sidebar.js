import { Switch, Hidden, useTheme } from '@mui/material';
import useSettings from 'hooks/useSettings';
import { sidebarWidth, sidebarCompactWidth } from 'data/constant';
import { convertHexToRGB } from 'utils/convertHexToRGB';
import Sidebar from 'components/Sidebar';
import Brand from 'components/Brand';
import { SidebarNavRoot, NavListBox } from 'styles/layouts/Sidebar';

const AppSidebar = () => {
  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  const leftSidebar = settings.layoutSettings.leftSidebar;
  const { mode, bgImgURL } = leftSidebar;

  const getSidebarvWidth = () => {
    switch (mode) {
      case 'compact':
        return sidebarCompactWidth;

      default:
        return sidebarWidth;
    }
  };
  const primaryRGB = convertHexToRGB(theme.palette.primary.main);

  const updateSidebarMode = (sidebarSettings) => {
    updateSettings({ layoutSettings: { leftSidebar: { ...sidebarSettings } } });
  };

  const handleSidebarToggle = () => {
    updateSidebarMode({ mode: mode === 'compact' ? 'full' : 'compact' });
  };

  return (
    <SidebarNavRoot image={bgImgURL} bg={primaryRGB} width={getSidebarvWidth()}>
      <NavListBox>
        <Brand>
          <Hidden lgDown>
            <Switch
              onChange={handleSidebarToggle}
              checked={leftSidebar.mode !== 'full'}
              color="secondary"
              size="small"
            />
          </Hidden>
        </Brand>
        <Sidebar />
      </NavListBox>
    </SidebarNavRoot>
  );
};

export default AppSidebar;
