import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttons: {
      position: "absolute",
      margin: "0 auto",
      bottom: 80,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 10,
      backdropFilter: "blur(5px)"
    },
    selectedButton: {
      background: theme.palette.primary.main,
      color: "#fff",
      "&:hover": {
        background: theme.palette.primary.dark
      }
    }
  })
);
