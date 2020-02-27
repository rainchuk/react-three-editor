import React, { useContext, useCallback } from "react";

import {
  List,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  InputBase
} from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";

import { SceneStore } from "../../../store/Scene";

import { useStyles } from "./styles";
import { observer } from "mobx-react";

export const Finder = observer(() => {
  const classes = useStyles();

  const sceneStore = useContext(SceneStore);

  const removeObject = useCallback(
    (id: number) => (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      sceneStore.removeObject(id);
    },
    []
  );

  return (
    <List className={classes.objects}>
      {sceneStore.getObjects.map((object, index) => (
        <ListItem>
          <InputBase value={object.name} disabled />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={removeObject(index)}
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
});
