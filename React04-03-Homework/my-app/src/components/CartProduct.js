import React, { Component } from "react";
import { Typography } from "@mui/material";

export default class CartProduct extends Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <Typography
          variant="body"
          sx={{ width: "10%", textDecoration: "underline" }}
        >
          {name}
        </Typography>
      </>
    );
  }
}
