import React, { Component } from "react";
import { Button, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default class CartButton extends Component {
  render() {
    const { handleDelete } = this.props;
    return (
      <Tooltip title="Delete">
        <Button
          startIcon={<DeleteIcon />}
          onClick={handleDelete}
          sx={{ paddingTop: "20px" }}
        />
      </Tooltip>
    );
  }
}
