import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const login = ["Log in"];
const signup = ["Sign up"];

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Typography
          variant="h4"
          component="a"
          sx={{ flexGrow: 1, color: "inherit", textDecoration: "none", ml: 4 }}
          href="/"
        >
          Social in
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mr: 4 }}>
          <Button
            size="small"
            variant="text"
            startIcon={<DriveFileRenameOutlineIcon />}
            color="inherit"
            sx={{ textTransform: "capitalize" }}
          >
            Posts
          </Button>
          {login.map((page) => (
            <Button
              key={page}
              size="small"
              variant="text"
              startIcon={<LoginRoundedIcon />}
              color="inherit"
              sx={{ textTransform: "capitalize" }}
            >
              <Link
                to={`/${page}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                {page}
              </Link>
            </Button>
          ))}
          {signup.map((page) => (
            <Button
              key={page}
              size="small"
              variant="text"
              startIcon={<AccountBoxIcon />}
              color="inherit"
              sx={{ textTransform: "capitalize" }}
            >
              <Link
                to={`/${page}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                {page}
              </Link>
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
