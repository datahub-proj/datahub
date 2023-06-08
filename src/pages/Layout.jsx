import * as React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "components/header/Header";
import Sidebar from "components/sidebar/Sidebar";

const Layout = () => {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const user = useSelector((state) => state.user);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header user={user} />
      <Sidebar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
    </Box>
  );
};

export default Layout;
