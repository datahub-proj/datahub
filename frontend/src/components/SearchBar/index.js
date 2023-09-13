import { useState } from 'react';
import { Icon, IconButton } from '@mui/material';
import { SearchContainer, SearchInput } from 'styles/components/SearchBar';

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
