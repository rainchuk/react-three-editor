import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  controlPanel: {
    position: "absolute",
    left: 0,
    width: 300,
    height: "100vh",
    background: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(75px)",
    zIndex: 10,
    padding: 32
  },
  button: {
    position: "absolute",
    width: 150,
    left: "50%",
    bottom: 80,
    marginLeft: -75,
    zIndex: 10,
    backdropFilter: "blur(5px)"
  }
});

export { useStyles };
