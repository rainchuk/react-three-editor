import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  panel: {
    width: 300,
    height: "100vh",
    position: "absolute",
    zIndex: 10,
    right: 0,
    background: "#fafafa",
    padding: 16
  },

  objects: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    background: "#fff",
    // padding: 16,
    border: "1px solid #f0f0f0"
  }
});
