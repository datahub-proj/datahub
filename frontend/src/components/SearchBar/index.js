import { useState } from 'react';
import { Icon, IconButton, styled } from '@mui/material';
import { topBarHeight } from 'data/constant';

const SearchContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 9,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  height: topBarHeight,
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
  '&::placeholder': {
    color: theme.palette.text.primary
  }
}));

const SearchInput = styled('input')(({ theme }) => ({
  width: '100%',
  border: 'none',
  outline: 'none',
  fontSize: '1rem',
  paddingLeft: '20px',
  height: 'calc(100% - 5px)',
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
  '&::placeholder': { color: theme.palette.text.primary }
}));

const AppSearchBar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <>
      {!open && (
        <IconButton onClick={toggle}>
          <Icon sx={{ color: 'text.primary' }}>search</Icon>
        </IconButton>
      )}

      {open && (
        <SearchContainer>
          <SearchInput type="text" placeholder="검색어를 입력해 주세요!" autoFocus />
          <IconButton onClick={toggle} sx={{ mx: 2, verticalAlign: 'middle' }}>
            <Icon sx={{ color: 'text.primary' }}>close</Icon>
          </IconButton>
        </SearchContainer>
      )}
    </>
  );
};

export default AppSearchBar;
