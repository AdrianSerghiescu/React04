import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  createTheme,
  colors,
  Stack,
  ThemeProvider,
  Avatar,
} from "@mui/material";
import AvatarImg from "../../images/avatar.jpeg";
import RickNavBar from "./RickNavBar";
import Account from "./Account";

const theme = createTheme({
  palette: {
    secondary: {
      main: colors.red[900],
    },
  },
});

function NavBar() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" sx={{ backgroundColor: "secondary.main" }}>
        <Toolbar disableGutters>
          <Avatar alt="laptop" src={AvatarImg} sx={{ marginLeft: "10px" }} />
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              ml: 1,
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              React 04 - Project
            </Link>
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mr: 4 }}>
            <RickNavBar />
            <Account />
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default NavBar;
