import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors"; // #TODO themeColor
// TODO: themeOptions

function createAppThemes() {
  return createTheme({
    palette: {
      primary: {
        main: blue[500],
      },
    },
  });
}

export const themes = createAppThemes();
