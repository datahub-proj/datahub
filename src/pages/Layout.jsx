import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "components/Header";

const Layout = () => {
  return (
    <Box height="100%" width="100%">
      <Box>
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
