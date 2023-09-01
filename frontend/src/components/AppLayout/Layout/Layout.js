import { Outlet } from "react-router-dom";
import { Box, styled } from "@mui/material";
import useSettings from "hooks/useSettings";
import { sidebarWidth, sidebarCompactWidth } from "utils/constant";

import SidebarTheme from "../../AppTheme/SidebarTheme/SidebarTheme";
import LayoutSidebar from "./LayoutSidebar";
import LayoutTopbar from "./LayoutTopbar";
import Footer from "../..//Footer";

const LayoutRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  background: theme.palette.background.default,
}));

const LayoutContainer = styled(Box)(({ width, open }) => ({
  height: "100vh",
  display: "flex",
  flexGrow: "1",
  flexDirection: "column",
  verticalAlign: "top",
  marginLeft: width,
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",
  marginRight: open ? 50 : 0,
}));

const ContentBox = styled(Box)(() => ({
  height: "100%",
  display: "flex",
  overflowY: "auto",
  overflowX: "hidden",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const Layout = () => {
  const { settings, updateSettings } = useSettings();
  const { layoutSettings } = settings;
  const {
    leftSidebar: { mode: sidebarMode, show: showSidebar },
  } = layoutSettings;

  const getSidenavWidth = () => {
    switch (sidebarMode) {
      case "full":
        return sidebarWidth;

      case "compact":
        return sidebarCompactWidth;

      default:
        return "0px";
    }
  };

  const sideBarWidth = getSidenavWidth();

  return (
    <LayoutRoot>
      {showSidebar && sidebarMode !== "close" && (
        <SidebarTheme>
          <LayoutSidebar />
        </SidebarTheme>
      )}
      <LayoutContainer width={sideBarWidth}>
        <LayoutTopbar />
        <ContentBox>
          <Outlet />
        </ContentBox>
        <Footer />
      </LayoutContainer>
      {/* <SecondarySidebar /> */}
    </LayoutRoot>
  );
};

export default Layout;
