import { CssBaseline } from "@mui/material";
import { SettingsProvider } from "./contexts/SettingsContext";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const content = useRoutes(routes);
  return (
    <SettingsProvider>
      <CssBaseline>{content}</CssBaseline>
    </SettingsProvider>
  );
}

export default App;
