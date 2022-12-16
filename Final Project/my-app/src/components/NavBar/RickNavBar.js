import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const RickNavBar = () => {
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
        startIcon={<CollectionsBookmarkIcon sx={{ color: "yellow" }} />}
        color="inherit"
        sx={{ textTransform: "capitalize", marginRight: "50px" }}
      >
        Rick & Morty
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
            color="inherit"
            startIcon={<ArrowForwardIcon />}
            sx={{ textTransform: "capitalize" }}
          >
            <NavLink
              activeclassname="active"
              to="/characters"
              style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "500",
              }}
            >
              Characters
            </NavLink>
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button
            size="medium"
            variant="text"
            color="inherit"
            startIcon={<ArrowForwardIcon />}
            sx={{ textTransform: "capitalize" }}
          >
            <NavLink
              to="/redux_episodes"
              style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "500",
              }}
            >
              Redux Episodes
            </NavLink>
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button
            size="medium"
            variant="text"
            color="inherit"
            startIcon={<ArrowForwardIcon />}
            sx={{ textTransform: "capitalize" }}
          >
            <NavLink
              to="/redux_characters"
              style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "500",
              }}
            >
              Redux Characters
            </NavLink>
          </Button>
        </MenuItem>
      </Menu>
    </>
  );
};

export default RickNavBar;
