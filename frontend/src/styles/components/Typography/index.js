import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)(({ ellipsis }) => ({
  ...(ellipsis && {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  })
}));
