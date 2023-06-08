import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { togglebrightMode } from "features/globals/brightModeSlice";
import { logout } from "features/users/userSlice";
import {
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AppBar from "./Appbar";
import FlexBetween from "components/common/FlexBetween";

const Header = ({ user }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Side */}
        <FlexBetween gap="1.5rem" p="0.1rem 3rem">
          <IconButton onClick={() => navigate(`/workspaces`)}>
            <FilterDramaIcon fontSize="large" />
          </IconButton>
          <Typography fontSize="20px">CloudLogs</Typography>
        </FlexBetween>

        {/* Right Side */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(togglebrightMode())}>
            {theme.palette.mode === "dark" ? (
              <Tooltip title="Light Mode">
                <LightModeOutlinedIcon sx={{ fontSize: "25px" }} />
              </Tooltip>
            ) : (
              <Tooltip title="Dark Mode">
                <DarkModeOutlinedIcon sx={{ fontSize: "25px" }} />
              </Tooltip>
            )}
          </IconButton>

          {/* User Information */}
          {user.loggedIn && (
            <FlexBetween>
              <Button
                onClick={handleClick}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textTransform: "none",
                  gap: "1rem",
                }}
              >
                <Box textAlign="left">
                  <Typography
                    fontSize="1rem"
                    sx={{ color: theme.palette.primary[100] }}
                  >
                    {user.username}
                  </Typography>
                </Box>
                <KeyboardArrowDownIcon
                  sx={{
                    color: theme.palette.primary[100],
                    fontSize: "25px",
                  }}
                />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              >
                <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
              </Menu>
            </FlexBetween>
          )}
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
