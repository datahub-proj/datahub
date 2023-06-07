import { Menu } from "@mui/icons-material";

const { styled } = require("@mui/system");

const MenuIcon = styled(Menu)(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`, // Change the border color here
  borderRadius: "20px",
}));

export default MenuIcon;
