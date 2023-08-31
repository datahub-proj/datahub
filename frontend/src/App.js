import { CssBaseline } from "@mui/material";
// import { SettingsProvider } from './context/SettingsContext';
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const content = useRoutes(routes);
  return <CssBaseline>{content}</CssBaseline>;
}

export default App;
