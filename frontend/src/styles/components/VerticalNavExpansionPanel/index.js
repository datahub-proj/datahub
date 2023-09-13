import { ButtonBase, styled } from '@mui/material';

export const NavExpandRoot = styled('div')(({ theme }) => ({
  '& .expandIcon': {
    transition: 'transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms',
    transform: 'rotate(90deg)'
  },
  '& .collapseIcon': {
    transition: 'transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms',
    transform: 'rotate(0deg)'
  },
  '& .expansion-panel': {
    overflow: 'hidden',
    transition: 'max-height 0.3s cubic-bezier(0, 0, 0.2, 1)'
  },
  '& .highlight': {
    background: theme.palette.primary.main
  },
  '&.compactNavItem': {
    width: 44,
    overflow: 'hidden',
    justifyContent: 'center !important',
    '& .itemText': { display: 'none' },
    '& .itemIcon': { display: 'none' }
  }
}));

export const BaseButton = styled(ButtonBase)(({ theme }) => ({
  height: 44,
  width: '100%',
  whiteSpace: 'pre',
  overflow: 'hidden',
  paddingRight: '16px',
  borderRadius: '4px',
  marginBottom: '8px',
  display: 'flex',
  justifyContent: 'space-between !important',
  color: theme.palette.text.primary,
  '&:hover': { background: 'rgba(255, 255, 255, 0.08)' },
  '& .icon': {
    width: 36,
    fontSize: '18px',
    paddingLeft: '16px',
    paddingRight: '16px',
    verticalAlign: 'middle'
  }
}));

export const BulletIcon = styled('div')(({ theme }) => ({
  width: 4,
  height: 4,
  color: 'inherit',
  overflow: 'hidden',
  marginLeft: '20px',
  marginRight: '8px',
  borderRadius: '300px !important',
  // background: theme.palette.primary.contrastText,
  background: theme.palette.text.primary
}));

export const ItemText = styled('span')(() => ({
  fontSize: '0.875rem',
  paddingLeft: '0.8rem',
  verticalAlign: 'middle'
}));

export const BadgeValue = styled('div')(() => ({
  padding: '1px 4px',
  overflow: 'hidden',
  borderRadius: '300px'
}));
