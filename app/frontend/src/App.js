import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { themeSettings } from "utils/theme";
import Layout from "pages/Layout";
import Workspaces from "pages/Workspaces";
import UserManagment from "pages/UserManagment";
import Settings from "pages/Settings";

function App() {
  const mode = useSelector((state) => state.brightMode.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/Workspaces" replcae />} />
              <Route path="/Workspaces" element={<Workspaces />} />
              <Route path="/users" element={<UserManagment />} />
              <Route path="/settings/account" element={<Settings />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
