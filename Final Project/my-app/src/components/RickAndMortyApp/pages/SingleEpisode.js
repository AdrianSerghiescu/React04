import React, { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const SingleEpisode = () => {
  const params = useParams();

  const [episode, setEpisode] = useState();

  useEffect(() => {
    const singleEpisodeApi = `https://rickandmortyapi.com/api/episode/${params.episodeId}`;
    fetch(singleEpisodeApi)
      .then((response) => response.json())
      .then((json) => setEpisode(json));
  }, [params]);
  return (
    <>
      {episode && (
        <Box
          sx={{
            backgroundColor: "#23242a",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            width: "100%",
            minHeight: "100vh",
          }}
        >
          <Box>
            <Paper elevation={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h4">{episode.name}</Typography>
              </Box>
              <Box mt={4} sx={{ display: "flex", color: "#8f8f8f" }}>
                <Typography mr={1} variant="h5">
                  Air Date :
                </Typography>
                <Typography variant="h5" ml={19}>
                  {episode.air_date}
                </Typography>
              </Box>
              <Box mt={2} sx={{ display: "flex", color: "#8f8f8f" }}>
                <Typography mr={1} variant="h4">
                  Episode :
                </Typography>
                <Typography variant="h4" ml={24}>
                  {episode.episode}
                </Typography>
              </Box>
              <Box mt={2} sx={{ display: "flex", color: "#8f8f8f" }}>
                <Typography mr={1} variant="h6">
                  Created :
                </Typography>
                <Typography letterSpacing={1} variant="h6" ml={12}>
                  {episode.created}
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Box>
      )}
    </>
  );
};

export default SingleEpisode;
