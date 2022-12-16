import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";

const SignOut = () => {
  const deleteStorage = () => {
    window.localStorage.clear("token");
    window.location.href = "./login";
  };
  return (
    <>
      <Button
        onClick={deleteStorage}
        size="medium"
        variant="outlined"
        startIcon={<LogoutIcon />}
        color="error"
        sx={{ textTransform: "capitalize" }}
      >
        Sign Out
      </Button>
    </>
  );
};

export default SignOut;
