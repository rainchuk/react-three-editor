import React, { useContext, useCallback } from "react";

import {
  List,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  InputBase
} from "@material-ui/core";

import { Finder } from "./Finder/Finder";

import { useStyles } from "./styles";

/** Component props */
interface Props {}

/** Object properties panel */
export const ObjectPropsPanel = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.panel}>
      <Finder />
    </div>
  );
};
