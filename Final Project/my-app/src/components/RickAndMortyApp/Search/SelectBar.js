import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@mui/material";

const SelectBar = ({ total, name, setID }) => {
  return (
    <TextField
      fullWidth
      color="error"
      select
      onChange={(e) => setID(e.target.value)}
      labelId={name}
      id={name}
      label="Choose.."
      sx={{
        backgroundColor: "white",
        borderRadius: "8px",
        "& label": { color: "red", fontWeight: "bold" },
      }}
    >
      {[...Array(total).keys()].map((nr) => {
        return (
          <MenuItem value={nr + 1}>
            {name} - {nr + 1}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default SelectBar;
