import { Box, Icon, styled, Chip, emphasize } from '@mui/material';

export const BreadcrumbRoot = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center'
});

export const BreadcrumbName = styled('h4')({
  margin: 0,
  fontSize: '16px',
  paddingBottom: '1px',
  verticalAlign: 'middle',
  textTransform: 'capitalize'
});

export const Separator = styled('h4')(({ theme }) => ({
  margin: 0,
  marginLeft: 8,
  marginRight: 8,
  paddingBottom: '3px',
  color: theme.palette.text.hint
}));

export const StyledIcon = styled(Icon)({
  marginLeft: 8,
  marginBottom: '4px',
  verticalAlign: 'middle'
});

export const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06)
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12)
    }
  };
});
