import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";
import SignOut from "./SignOut";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

const Account = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size="medium"
        variant="text"
        startIcon={<AccountTreeIcon sx={{ color: "yellow" }} />}
        color="inherit"
        sx={{ textTransform: "capitalize",marginRight: "10px" }}
      >
        Account
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Button
            size="medium"
            variant="text"
            startIcon={<AccountBoxIcon />}
            color="inherit"
            sx={{ textTransform: "capitalize" }}
          >
            <NavLink
              activeclassname="active"
              to="/register"
              style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "500",
              }}
            >
              Register
            </NavLink>
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button
            size="medium"
            variant="text"
            startIcon={<LoginRoundedIcon />}
            color="inherit"
            sx={{ textTransform: "capitalize" }}
          >
            <NavLink
              to="/login"
              style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "500",
              }}
            >
              Login
            </NavLink>
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <SignOut />
        </MenuItem>
      </Menu>
    </>
  );
};

export default Account;
