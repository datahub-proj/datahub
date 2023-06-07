import React from "react";
import {
  LightModeOutlined,
  Search,
  SettingsOutlined,
  DarkModeOutlined,
} from "@mui/icons-material";
import FlexBetween from "components/common/FlexBetween";
import { useDispatch } from "react-redux";
import { setBrightMode } from "features/globals/brightModeSlice";
import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
} from "@mui/material";
import MenuIcon from "components/icons/MenuIcon";

const Header = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* left side */}
        <FlexBetween>
          {/* Dashboard Toggle Button */}
          <IconButton onClick={() => console.log("open/close sidebar")}>
            <MenuIcon theme={theme} />
          </IconButton>
          {/* Search bar */}
          {/* <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="검색어를 입력해주세요." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween> */}
        </FlexBetween>
        {/* Right side */}
        <FlexBetween gap="1.5rem">
          {/* Dark/light Mode Button */}
          <IconButton onClick={() => dispatch(setBrightMode())}>
            {theme.palette.mode === "light" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          {/* Settings Button*/}
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
