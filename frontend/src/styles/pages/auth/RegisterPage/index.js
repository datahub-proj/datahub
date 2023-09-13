import { Box, styled } from '@mui/material';

export const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

export const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

export const ContentBox = styled(JustifyBox)(() => ({
  height: '100%',
  padding: '32px',
  background: 'rgba(0, 0, 0, 0.01)'
}));

export const JWTRegister = styled(JustifyBox)(() => ({
  background: '#ffffff',
  minHeight: '100vh !important',
  '& .card': {
    maxWidth: 800,
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
    boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;'
  }
}));
