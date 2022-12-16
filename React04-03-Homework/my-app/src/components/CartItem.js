import React, { Component } from "react";
import { Button, Typography, Box, Paper } from "@mui/material";

export default class CartItem extends Component {
  getCounterClasses = () => {
    let classes = "";
    const { count } = this.props;
    classes += count === 0 ? "warning" : "info";
    return classes;
  };

  render() {
    const { children, handleDecrement, handleIncrement, count } = this.props;
    return (
      <Paper
        sx={{
          width: "60%",
          backgroundColor: "lightyellow",
          marginLeft: "250px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ borderBottom: "1px solid black", width: "60%" }}>
            {children}
          </Box>
          <Box sx={{ borderBottom: "1px solid black", width: "40%" }}>
            <Button
              onClick={handleDecrement}
              size="large"
              sx={{ paddingTop: "15px" }}
            >
              -
            </Button>
            <Typography
              variant="body"
              className={this.getCounterClasses()}
              sx={{ color: "green" }}
            >
              {count}
            </Typography>
            <Button
              onClick={handleIncrement}
              size="large"
              sx={{ paddingTop: "17px" }}
            >
              +
            </Button>
          </Box>
        </Box>
      </Paper>
    );
  }
}
