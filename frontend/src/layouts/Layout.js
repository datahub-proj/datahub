import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { useMediaQuery, useTheme, ThemeProvider } from '@mui/material';
import useSettings from 'hooks/useSettings';
import { sidebarWidth, sidebarCompactWidth } from 'data/constant';

import SidebarTheme from 'theme/Sidebar';
import AppSidebar from './Sidebar';
import AppHeader from './Header';
import AppFooter from './Footer';
import { LayoutRoot, LayoutContainer, ContentBox } from 'styles/layouts/Layout';

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
