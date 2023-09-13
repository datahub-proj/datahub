import { Box, styled } from '@mui/material';

export const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center'
}));

export const JustifyBox = styled(FlexBox)(() => ({
  justifyContent: 'center'
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  padding: 32,
  background: theme.palette.background.default
}));

export const ForgotPasswordRoot = styled(JustifyBox)(() => ({
  background: '#ffffff',
  minHeight: '100vh !important',
  '& .card': {
    maxWidth: 800,
    margin: '1rem',
    borderRadius: 12,
    boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;'
  }
}));
