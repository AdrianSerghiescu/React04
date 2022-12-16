import React, { useEffect, useState } from "react";
import { Stack, Box } from "@mui/system";
import { Typography } from "@mui/material";
import Cards from "./Cards";
import ChooseEpisode from "./ChooseEpisode";

const RickAndMortyApp = () => {
  let [id, setId] = useState(1);
  let [episodes, setEpisodes] = useState([]);
  let { name, episode } = episodes;
  let [results, setResults] = useState([]);
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((response) => response.json());
      setEpisodes(data);

      let eachCharacter = await Promise.all(
        data.characters.map((take) => {
          return fetch(take).then((response) => response.json());
        })
      );
      setResults(eachCharacter);
    })();
  }, [api]);

  return (
    <Stack>
      <ChooseEpisode setId={setId} name="Episode" total={51} />
      <Box display="flex" justifyContent="center">
        <Typography variant="h4" color="primary">
          {episode} - {name}
        </Typography>
      </Box>
      <Box>
        <Cards results={results} />
      </Box>
    </Stack>
  );
};

export default RickAndMortyApp;
