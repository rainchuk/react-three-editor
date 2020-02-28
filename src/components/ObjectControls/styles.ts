import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  buttons: {
    position: "absolute",
    margin: "0 auto",
    bottom: 80,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
    backdropFilter: "blur(5px)"
  }
});
