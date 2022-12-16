import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from "../../../slices/episodeSlice";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  Box,
  Paper,
  Button,
  Divider,
  Chip,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import { LightTooltip } from "../../utils/LightTooltip";

const ReduxEpisodes = () => {
  const episode = useSelector((state) => state.episode);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEpisodes());
  }, [dispatch]);

  return (
    <>
      <Box pt={10} sx={{ backgroundColor: "#23242a" }}>
        <Grid
          pt={2}
          pb={3}
          container
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={3}>
            {episode.loading && <Box sx={{ color: "white" }}>Loading...</Box>}
            <Typography sx={{ color: "white" }} variant="h4">
              List of episodes
            </Typography>
          </Grid>
        </Grid>
        {!episode.loading && episode.error ? (
          <Box sx={{ color: "white" }}>Error : {episode.error}</Box>
        ) : null}
        <Box>
          {!episode.loading && episode.episodes.length ? (
            <Grid
              container
              rowSpacing={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {episode.episodes.map((episode) => (
                <Grid item xs={8} key={episode.id}>
                  <Paper elevation={6}>
                    <Accordion>
                      <LightTooltip
                        arrow
                        placement="right"
                        title="Click to expand !"
                      >
                        <AccordionSummary
                          expandIcon={
                            <Chip
                              label={episode.id}
                              size="medium"
                              sx={{ cursor: "pointer" }}
                            />
                          }
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              flexWrap: "wrap",
                            }}
                          >
                            <ConnectedTvIcon color="error" />
                            <Typography ml={2} variant="h5">
                              {episode.name}
                            </Typography>
                          </Box>
                        </AccordionSummary>
                      </LightTooltip>
                      <Divider />
                      <AccordionDetails>
                        <Box
                          mt={2}
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <Paper elevation={6} sx={{ borderRadius: "8px" }}>
                            <Box>
                              <Link
                                style={{ textDecoration: "none" }}
                                to={`/redux_episodes/${episode.id}`}
                              >
                                <Button
                                  variant="contained"
                                  color="error"
                                  sx={{ textTransform: "capitalize" }}
                                >
                                  Click for episode details !
                                </Button>
                              </Link>
                            </Box>
                          </Paper>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          ) : null}
        </Box>
      </Box>
    </>
  );
};

export default ReduxEpisodes;
