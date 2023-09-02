import { Box, styled } from '@mui/material';
import { AppVerticalNav } from './AppVerticalNav/AppVerticalNav';
import useSettings from 'hooks/useSettings';
import { navigations } from 'navigations';

const StyledBox = styled(Box)(() => ({
  paddingLeft: '1rem',
  paddingRight: '1rem',
  position: 'relative'
}));

const SidebarMobile = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: '100vw',
  zIndex: -1,
  [theme.breakpoints.up('lg')]: { display: 'none' }
}));

const Sidebar = () => {
  const { settings, updateSettings } = useSettings();

  const updateSidebarMode = (sidebarSettings) => {
    let activeLayoutSettingsName = settings.activeLayout + 'Settings';
    let activeLayoutSettings = settings[activeLayoutSettingsName];

    updateSettings({
      ...settings,
      [activeLayoutSettingsName]: {
        ...activeLayoutSettings,
        leftSidebar: {
          ...activeLayoutSettings.leftSidebar,
          ...sidebarSettings
        }
      }
    });
  };

  return (
    <>
      <StyledBox>
        <AppVerticalNav items={navigations} />
      </StyledBox>

      {/* Sidebar close */}
      <SidebarMobile onClick={() => updateSidebarMode({ mode: 'close' })} />
    </>
  );
};

export default Sidebar;
