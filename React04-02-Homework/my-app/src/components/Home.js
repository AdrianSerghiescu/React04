import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";
import Image from "../images/laptop.jpg";

const login = ["Log in"];
const signup = ["Sign up"];

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
  },
};

const Home = () => {
  return (
    <div>
      <Paper style={styles.paperContainer}>
        <Box
          sx={{
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {login.map((page) => (
            <Button
              key={page}
              size="medium"
              variant="contained"
              color="info"
              sx={{ textTransform: "capitalize", width: "40", margin: 2 }}
            >
              <Link
                to={`/${page}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                {page}
              </Link>
            </Button>
          ))}
          {signup.map((page) => (
            <Button
              key={page}
              size="medium"
              variant="contained"
              color="info"
              sx={{ textTransform: "capitalize" }}
            >
              <Link
                to={`/${page}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                {page}
              </Link>
            </Button>
          ))}
        </Box>
      </Paper>
    </div>
  );
};

export default Home;
