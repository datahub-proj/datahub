import { ThemeProvider, useTheme } from '@mui/material';
import useSettings from 'hooks/useSettings';

const SidebarTheme = ({ children }) => {
  const theme = useTheme();
  const { settings } = useSettings();

  const sidenavTheme = settings.themes[settings.layoutSettings.leftSidebar.theme] || theme;

  return <ThemeProvider theme={sidenavTheme}>{children}</ThemeProvider>;
};

export default SidebarTheme;
