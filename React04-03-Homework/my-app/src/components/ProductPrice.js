import React, { Component } from "react";
import { Typography } from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";

export default class ProductPrice extends Component {
  render() {
    const { price } = this.props;
    return (
      <Typography variant="body2" sx={{ ml: 8, fontWeight: "bold" }}>
        Pret de la : {price} <EuroIcon sx={{ width: "12px", height: "12px" }} />
      </Typography>
    );
  }
}
