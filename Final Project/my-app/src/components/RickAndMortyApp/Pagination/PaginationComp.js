import React from "react";
import { Pagination } from "@mui/material";

const PaginationComp = ({ setPageNumber, pageNumber, info }) => {
  let handleChange = (a, b) => {
    setPageNumber(b);
  };

  return (
    <>
      <Pagination
        onChange={handleChange}
        defaultPage={pageNumber === 1 ? 0 : pageNumber - 1}
        count={info?.pages}
        color="error"
        size="large"
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "white",
          paddingBottom: "20px",
          paddingTop: "20px",
          "& button": { fontWeight: "bold", color: "white" },
        }}
      />
    </>
  );
};

export default PaginationComp;
