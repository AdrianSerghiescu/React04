import React, { Component } from "react";
import { Container } from "@mui/material";
import Cart from "./Cart";

export default class CartApp extends Component {
  render() {
    return (
      <Container sx={{ m: 5 }}>
        <Cart />
      </Container>
    );
  }
}
