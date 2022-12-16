import React from "react";
import TypicalComp from "../utils/Typical";
import ReactPlayer from "react-player";
import Image4 from "../../images/mirror-img.jpg";
import Video from "../../images/video.mp4";
import { useStyles } from "./styles";
import { Box, Typography } from "@mui/material";

const Home = () => {
  const classes = useStyles();
  return (
    <Box pt={8} className={classes.root}>
      <Box ml={2} sx={{ width: "50%", pointerEvents: "none" }}>
        <Box>
          <Typography variant="h2" component="h1" sx={{ color: "white" }}>
            Don't forget to be
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" sx={{ color: "red" }}>
            .........
          </Typography>
          <TypicalComp />
        </Box>
      </Box>
      <Box className={classes.wrapper}>
        <Box
          sx={{
            "&: hover": {
              transform: "scale(1.8)",
              paddingRight: "70px",
              paddingBottom: "45px",
            },
          }}
        >
          <ReactPlayer
            width="200px"
            height="200px"
            playing={true}
            volume={0}
            loop={true}
            url={Video}
          />
        </Box>
        <img className={classes.img} src={Image4} alt="cardboard" />
      </Box>
    </Box>
  );
};

export default Home;
