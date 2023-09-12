import { themeShadows } from 'theme/themeColors';
import {
  Box,
  styled,
  MenuItem,
  Icon,
  Hidden,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { topBarHeight } from 'data/constant';
import { Link } from 'react-router-dom';
import { Span } from 'components/Typography';
import AppMenu from 'components/Menu';
import AppSearchBar from 'components/SearchBar';
import useSettings from 'hooks/useSettings';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary
}));

const HeaderRoot = styled('div')({
  top: 0,
  zIndex: 96,
  height: topBarHeight,
  boxShadow: themeShadows[8],
  transition: 'all 0.3s ease'
});

const HeaderContainer = styled(Box)(({ theme }) => ({
  padding: '8px',
  paddingLeft: 18,
  paddingRight: 20,
  height: topBarHeight,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: theme.palette.primary.main,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 16,
    paddingRight: 16
  },
  [theme.breakpoints.down('xs')]: {
    paddingLeft: 14,
    paddingRight: 16
  }
}));

const UserMenu = styled(Box)({
  padding: 4,
  display: 'flex',
  borderRadius: 24,
  cursor: 'pointer',
  alignItems: 'center',
  '& span': { margin: '0 8px' }
});

const StyledItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  minWidth: 185,
  '& a': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none'
  },
  '& span': { marginRight: '10px', color: theme.palette.text.primary }
}));

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
