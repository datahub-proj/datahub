import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { togglebrightMode } from "features/globals/brightModeSlice";
import { logout } from "features/users/userSlice";
import { Box, IconButton, Toolbar, Typography, Tooltip } from "@mui/material";
import AbcIcon from "@mui/icons-material/Abc";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import AppBar from "./Appbar";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Header = ({ user }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showLogoutOptions, setShowLogoutOptions] = useState(false);

  const handleLogoutToggle = () => {
    setShowLogoutOptions((prev) => !prev);
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton onClick={() => navigate(`/`)}>
            <AbcIcon />
          </IconButton>
          <Typography>CloudLogs</Typography>
          <IconButton onClick={() => dispatch(togglebrightMode())}>
            {theme.palette.mode === "dark" ? (
              <LightModeOutlinedIcon sx={{ fontSize: "25px" }} />
            ) : (
              <DarkModeOutlinedIcon sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          {user.loggedIn && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Tooltip title={user.email}>
                <Typography>{user.email}</Typography>
              </Tooltip>
              <IconButton onClick={handleLogoutToggle}>
                {showLogoutOptions ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {showLogoutOptions && (
        <Box
          sx={{
            backgroundColor: "#3333",
            p: 1,
            mt: 1,
            marginLeft: "auto",
          }}
        >
          <Typography fontSize="100px" sx={{ mr: 1 }}>
            Logout
          </Typography>
          <IconButton onClick={() => dispatch(logout())}>
            <LogoutIcon />
          </IconButton>
        </Box>
      )}
    </div>
  );
};

export default Header;
