import { Chip } from "@mui/material";

export const Status = ({ status }) => {
  if (status === "Dead") {
    return (
      <Chip
        label={status}
        color="error"
        size="small"
        sx={{
          position: "absolute",
          top: "10px",
          right: "20px",
          fontSize: "17px",
        }}
      />
    );
  } else if (status === "Alive") {
    return (
      <Chip
        label={status}
        color="success"
        size="small"
        sx={{
          position: "absolute",
          top: "10px",
          right: "20px",
          fontSize: "17px",
        }}
      />
    );
  } else {
    return (
      <Chip
        label={status}
        color="info"
        size="small"
        sx={{
          position: "absolute",
          top: "10px",
          right: "20px",
          fontSize: "17px",
        }}
      />
    );
  }
};
