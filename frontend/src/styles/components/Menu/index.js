import { Box, styled } from '@mui/material';

export const MenuButton = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  color: theme.palette.text.primary,
  '& div:hover': { backgroundColor: theme.palette.action.hover }
}));
