import { Box, Icon, Hidden, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { Span } from 'components/Typography';
import AppMenu from 'components/Menu';
import AppSearchBar from 'components/SearchBar';
import useSettings from 'hooks/useSettings';
import {
  HeaderRoot,
  HeaderContainer,
  StyledIconButton,
  StyledItem,
  UserMenu
} from 'styles/layouts/Header';

const AppHeader = () => {
  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

  const updateSidebarMode = (sidebarSettings) => {
    updateSettings({ layoutSettings: { leftSidebar: { ...sidebarSettings } } });
  };

  const handleSidebarToggle = () => {
    let { layoutSettings } = settings;
    let mode;
    if (isMdScreen) {
      mode = layoutSettings.leftSidebar.mode === 'close' ? 'mobile' : 'close';
    } else {
      mode = layoutSettings.leftSidebar.mode === 'full' ? 'close' : 'full';
    }
    updateSidebarMode({ mode });
  };

  return (
    <HeaderRoot>
      <HeaderContainer>
        <Box display="flex">
          <StyledIconButton onClick={handleSidebarToggle}>
            <Icon>menu</Icon>
          </StyledIconButton>
        </Box>
        <Box display="flex" alignItems="center">
          <AppSearchBar />
          <AppMenu
            menuButton={
              <UserMenu>
                <Hidden xsDown>
                  <Span>Hi</Span>
                </Hidden>
              </UserMenu>
            }
          >
            <StyledItem>
              <Link to="/page-layouts/user-profile">
                <Icon> person </Icon>
                <Span> 계정관리 </Span>
              </Link>
            </StyledItem>

            <StyledItem>
              <Icon> settings </Icon>
              <Span> 설정 </Span>
            </StyledItem>

            <StyledItem>
              <Icon> power_settings_new </Icon>
              <Span> 로그아웃 </Span>
            </StyledItem>
          </AppMenu>
        </Box>
      </HeaderContainer>
    </HeaderRoot>
  );
};

export default AppHeader;
