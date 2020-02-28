import React from "react";

import { ButtonGroup, Button } from "@material-ui/core";

import { useStyles } from "./styles";

export const ObjectCotrols = () => {
  const classes = useStyles();

  return (
    <ButtonGroup
      className={classes.buttons}
      color="primary"
      aria-label="outlined primary button group"
    >
      <Button>Scale</Button>
      <Button>Position</Button>
      <Button>Rotation</Button>
    </ButtonGroup>
  );
};
