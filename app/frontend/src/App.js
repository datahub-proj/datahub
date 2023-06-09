import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { themeSettings } from "utils/theme";
import Layout from "pages/Layout";
import ProtectedUserManagement from "pages/UserManagment";
import ProtectedSettings from "pages/Settings";
import LoginPage from "pages/LoginPage";
import ProtectedWorkspaces from "./pages/Workspaces";

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
              <Route path="/" element={<Navigate to="/workspaces" replcae />} />
              <Route path="/workspaces" element={<ProtectedWorkspaces />} />
              <Route path="/users" element={<ProtectedUserManagement />} />
              <Route path="/settings/account" element={<ProtectedSettings />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
