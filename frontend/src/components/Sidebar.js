import { Box, styled } from "@mui/material";
import { AppVerticalNav } from "./AppVerticalNav/AppVerticalNav";
import { navigations } from "navigations";

const StyledBox = styled(Box)(() => ({
  paddingLeft: "1rem",
  paddingRight: "1rem",
  position: "relative",
}));

const Sidebar = () => {
  return (
    <>
      <StyledBox>
        <AppVerticalNav items={navigations} />
      </StyledBox>
    </>
  );
};

export default Sidebar;
