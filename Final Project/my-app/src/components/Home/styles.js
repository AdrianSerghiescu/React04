import { makeStyles } from "@mui/styles";
import Image3 from "../../images/home-img.jpg";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    width: "100%",
    minHeight: "90vh",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundImage: `url(${Image3})`,
    backgroundSize: "contain",
    "& *": {
      transition: ".5s ease-in-out",
    },
  },
  wrapper: {
    width: "200px",
    height: "200px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "20px",
    marginTop: "25px",
    "&:hover img": {
      transform: "rotateX(-90deg)",
      top: "0",
    },
  },
  img: {
    position: "absolute",
    top: "-5%",
    left: "0",
    minHeight: "100%",
    maxWidth: "100%",
    transformOrigin: "50% 0%",
    objectFit: "fill",
    boxShadow: "1px 1px 50px red",
  },
}));
