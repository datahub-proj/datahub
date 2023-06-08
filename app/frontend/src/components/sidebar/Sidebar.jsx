import { styled, useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import TrendingUpOutlined from "@mui/icons-material/TrendingUpOutlined";
import AdminPanelSettingsOutlined from "@mui/icons-material/AdminPanelSettingsOutlined";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Drawer from "./Drawer";
import DrawerHeader from "./DrawerHeader";

const tabList = [
  {
    text: "Workspaces",
    icon: <HomeOutlined />,
    page: "workspaces",
  },
  {
    text: "Data",
    icon: <FolderOpenOutlinedIcon />,
    page: "data",
  },
  {
    text: "Usage",
    icon: <TrendingUpOutlined />,
    page: "usage",
  },
  {
    text: "User Management",
    icon: <AdminPanelSettingsOutlined />,
    page: "users",
  },
  {
    text: "Cloud Resources",
    icon: <CloudQueueOutlinedIcon />,
    page: "cloud-resources/credential-configurations",
  },
  {
    text: "Settings",
    icon: <SettingsOutlinedIcon />,
    page: "settings/account",
  },
];

const Sidebar = ({ open, handleDrawerOpen, handleDrawerClose }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      open={open}
      onMouseEnter={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
    >
      <DrawerHeader />
      <Divider />
      <List>
        {tabList.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate(`/${item.page}`)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
