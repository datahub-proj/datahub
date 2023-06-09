import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const PageContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(13),
  position: "fixed",
  marginLeft: "0.5rem",
}));

export default PageContent;
