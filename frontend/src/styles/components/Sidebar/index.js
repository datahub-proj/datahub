import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)(() => ({
  paddingLeft: '1rem',
  paddingRight: '1rem',
  position: 'relative'
}));

export const SidebarMobile = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: '100vw',
  zIndex: -1,
  [theme.breakpoints.up('lg')]: { display: 'none' }
}));
