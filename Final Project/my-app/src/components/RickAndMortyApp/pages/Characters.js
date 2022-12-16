import React, { useState, useEffect } from "react";
import { Box, Grid, Paper } from "@mui/material";
import Cards from "../Cards/Cards";
import PaginationComp from "../Pagination/PaginationComp";

const Characters = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [status] = useState("");
  const [species] = useState("");
  const { info, results } = fetchedData;
  const restApi = `https://rickandmortyapi.com/api/character?page=${pageNumber}&status=${status}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(restApi).then((response) => response.json());
      setFetchedData(data);
    })();
  }, [restApi]);

  return (
    <Paper
      sx={{
        backgroundColor: "#23242a",
        paddingLeft: "65px",
        paddingTop: "80px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Grid container>
          <Cards results={results} />
        </Grid>
      </Box>
      <PaginationComp
        info={info}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </Paper>
  );
};

export default Characters;
