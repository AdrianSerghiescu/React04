import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../../slices/characterSlice";
import { Grid, Typography, Box, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { LightTooltip } from "../../utils/LightTooltip";

const ReduxCharacters = () => {
  const character = useSelector((state) => state.character);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacters());
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
            {character.loading && <Box sx={{ color: "white" }}>Loading...</Box>}
            <Typography sx={{ color: "white" }} variant="h4">
              Featured characters
            </Typography>
          </Grid>
        </Grid>
        {!character.loading && character.error ? (
          <Box sx={{ color: "white" }}>Error : {character.error}</Box>
        ) : null}
        <Box>
          {!character.loading && character.characters.length ? (
            <Grid container rowSpacing={2} columnSpacing={2} ml={4}>
              {character.characters.map((character) => (
                <Grid item xs={3} key={character.id}>
                  <Card sx={{ maxWidth: 225 }}>
                    <img
                      src={character.image}
                      alt="character-img"
                      style={{ width: "225px", height: "225px" }}
                    />
                    <LightTooltip
                      arrow
                      placement="top"
                      title={character.status}
                    >
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {character.name}
                        </Typography>
                      </CardContent>
                    </LightTooltip>
                    <Divider />
                    <CardActions>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          color: "#8f8f8f",
                        }}
                      >
                        <Typography>Species : {character.species}</Typography>
                        <Typography>Gender : {character.gender}</Typography>
                      </Box>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : null}
        </Box>
      </Box>
    </>
  );
};

export default ReduxCharacters;
