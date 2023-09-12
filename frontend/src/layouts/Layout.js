import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, styled, useMediaQuery, useTheme, ThemeProvider } from '@mui/material';
import useSettings from 'hooks/useSettings';
import { sidebarWidth, sidebarCompactWidth } from 'data/constant';

import SidebarTheme from 'theme/Sidebar';
import AppSidebar from './Sidebar';
import AppHeader from './Header';
import AppFooter from './Footer';

const LayoutRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  background: theme.palette.background.default
}));

const ContentBox = styled(Box)(() => ({
  height: '100%',
  display: 'flex',
  overflowY: 'auto',
  overflowX: 'hidden',
  flexDirection: 'column',
  justifyContent: 'space-between'
}));

const LayoutContainer = styled(Box)(({ width, open }) => ({
  height: '100vh',
  display: 'flex',
  flexGrow: '1',
  flexDirection: 'column',
  verticalAlign: 'top',
  marginLeft: width,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  marginRight: open ? 50 : 0
}));

const Layout = () => {
  const { settings, updateSettings } = useSettings();
  const { layoutSettings } = settings;
  const topbarTheme = settings.themes[layoutSettings.topbar.theme];
  const {
    leftSidebar: { mode: sidebarMode, show: showSidebar }
  } = layoutSettings;

  const getSidenavWidth = () => {
    switch (sidebarMode) {
      case 'full':
        return sidebarWidth;

      case 'compact':
        return sidebarCompactWidth;

      default:
        return '0px';
    }
  };

  const sideBarWidth = getSidenavWidth();
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

  const ref = useRef({ isMdScreen, settings });

  useEffect(() => {
    let { settings } = ref.current;
    let sidebarMode = settings.layoutSettings.leftSidebar.mode;
    if (settings.layoutSettings.leftSidebar.show) {
      let mode = isMdScreen ? 'close' : sidebarMode;
      updateSettings({ layoutSettings: { leftSidebar: { mode } } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMdScreen]);

  return (
    <LayoutRoot>
      {showSidebar && sidebarMode !== 'close' && (
        <SidebarTheme>
          <AppSidebar />
        </SidebarTheme>
      )}
      <LayoutContainer width={sideBarWidth}>
        <ThemeProvider theme={topbarTheme}>
          <AppHeader />
        </ThemeProvider>
        <ContentBox>
          <Outlet />
        </ContentBox>
        <AppFooter />
      </LayoutContainer>
      {/* <SecondarySidebar /> */}
    </LayoutRoot>
  );
};

export default Layout;
