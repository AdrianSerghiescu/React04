import React from "react";
import { Stack } from "@mui/system";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ImageListItemBar } from "@mui/material";

const Cards = ({ results }) => {
  let display;
  display = results.map((y) => {
    let { image, name } = y;
    return (
      <Stack key={y.id} spacing={4}>
        <ImageListItem>
          <img src={image} alt={name} loading="lazy" />
          <ImageListItemBar title={name} />
        </ImageListItem>
      </Stack>
    );
  });

  return (
    <ImageList variant="woven" cols={6} gap={8}>
      {display}
    </ImageList>
  );
};

export default Cards;
