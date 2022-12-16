import React from "react";
import "./styles.css";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { Status } from "./Status";

const Cards = ({ results }) => {
  let display;
  if (results) {
    display = results.map((info) => {
      let { id, name, image, status, species } = info;
      return (
        <>
          <Grid item xs={2} key={id} position="relative" mb={4} ml={2}>
            <Paper
              elevation={6}
              sx={{
                boxShadow: "-1px 4px 24px 4px #b71c1c",
                borderRadius: "10px",
              }}
            >
              <Box>
                <img className="card-img" src={image} alt={name} />
                <Box padding="10px">
                  <Typography fontWeight="bold" mb={2}>
                    {name}
                  </Typography>
                  <Typography>{species}</Typography>
                </Box>
              </Box>
            </Paper>
            <Status status={status} />
          </Grid>
        </>
      );
    });
  }
  return <>{display}</>;
};

export default Cards;
