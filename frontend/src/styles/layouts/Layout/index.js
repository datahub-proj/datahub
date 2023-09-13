import { Box, styled } from '@mui/material';

export const LayoutRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  background: theme.palette.background.default
}));

export const ContentBox = styled(Box)(() => ({
  height: '100%',
  display: 'flex',
  overflowY: 'auto',
  overflowX: 'hidden',
  flexDirection: 'column',
  justifyContent: 'space-between'
}));

export const LayoutContainer = styled(Box)(({ width, open }) => ({
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
