import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  menu: {
    position: "absolute",
    zIndex: 10,
    top: 0,
    left: 0,
    height: 60,
    display: "flex",
    alignItems: "center",
    padding: "0 16px"
  }
});
