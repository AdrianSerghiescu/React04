import React from "react";
import Typical from "react-typical";
import { Typography } from "@mui/material";

const TypicalComp = () => {
  return (
    <>
      <Typography sx={{ color: "yellow" }} variant="h5">
        <b>
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Optimistic",
              5000,
              "Learner",
              5000,
              "Dreamer",
              5000,
              "Adventurous",
              5000,
              "Intuitive",
              5000,
              "Adaptable",
              5000,
              "Dynamic",
              5000,
              "Passionate",
              5000,
              "Ambitious",
              5000,
              "Reliable",
              5000,
              "Smart",
              5000,
              "Hard-working",
              5000,
              "Self-confident",
              5000,
            ]}
          />
        </b>
      </Typography>
    </>
  );
};

export default TypicalComp;
