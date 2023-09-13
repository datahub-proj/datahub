import { Box, styled } from '@mui/material';
import { themeShadows } from 'theme/themeColors';
import { sidebarWidth } from 'data/constant';

export const SidebarNavRoot = styled(Box)(({ theme, width, bg, image }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: width,
  boxShadow: themeShadows[8],
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top',
  backgroundSize: 'cover',
  zIndex: 111,
  overflow: 'hidden',
  color: theme.palette.text.primary,
  transition: 'all 250ms ease-in-out',
  backgroundImage: `linear-gradient(to bottom, rgba(${bg}, 0.96), rgba(${bg}, 0.96)), url(${image})`,
  '&:hover': {
    width: sidebarWidth,
    '& .sidenavHoverShow': { display: 'block' },
    '& .compactNavItem': {
      width: '100%',
      maxWidth: '100%',
      '& .nav-bullet': { display: 'block' },
      '& .nav-bullet-text': { display: 'none' }
    }
  }
}));

export const NavListBox = styled(Box)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
});
