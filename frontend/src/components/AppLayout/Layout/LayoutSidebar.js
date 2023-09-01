import { Box, Switch, Hidden, styled, useTheme } from "@mui/material";
import useSettings from "hooks/useSettings";
import { themeShadows } from "components/AppTheme/themeColors";
import { sidebarWidth, sidebarCompactWidth } from "utils/constant";
import { convertHexToRGB } from "utils/utils";
import Sidebar from "components/Sidebar";
import Brand from "components/Brand";

const SidebarNavRoot = styled(Box)(({ theme, width, bg, image }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: width,
  boxShadow: themeShadows[8],
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top",
  backgroundSize: "cover",
  zIndex: 111,
  overflow: "hidden",
  color: theme.palette.text.primary,
  transition: "all 250ms ease-in-out",
  backgroundImage: `linear-gradient(to bottom, rgba(${bg}, 0.96), rgba(${bg}, 0.96)), url(${image})`,
  "&:hover": {
    width: sidebarWidth,
    "& .sidenavHoverShow": { display: "block" },
    "& .compactNavItem": {
      width: "100%",
      maxWidth: "100%",
      "& .nav-bullet": { display: "block" },
      "& .nav-bullet-text": { display: "none" },
    },
  },
}));

const NavListBox = styled(Box)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

const LayoutSidebar = () => {
  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  const leftSidebar = settings.layoutSettings.leftSidebar;
  const { mode, bgImgURL } = leftSidebar;

  const getSidebarvWidth = () => {
    switch (mode) {
      case "compact":
        return sidebarCompactWidth;

      default:
        return sidebarWidth;
    }
  };

  const updateSidebarMode = (sidebarSettings) => {
    updateSettings({ layoutSettings: { leftSidebar: { ...sidebarSettings } } });
  };

  const handleSidebarToggle = () => {
    updateSidebarMode({ mode: mode === "compact" ? "full" : "compact" });
  };

  const primaryRGB = convertHexToRGB(theme.palette.primary.main);
  return (
    <SidebarNavRoot image={bgImgURL} bg={primaryRGB} width={getSidebarvWidth()}>
      <NavListBox>
        <Brand>
          <Hidden smDown>
            <Switch
              onChange={handleSidebarToggle}
              checked={leftSidebar.mode !== "full"}
              color="secondary"
              size="small"
            />
          </Hidden>
        </Brand>
        <Sidebar />
      </NavListBox>
    </SidebarNavRoot>
  );
};

export default LayoutSidebar;
