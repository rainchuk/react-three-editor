import React, { useContext, useCallback } from "react";
import { observer } from "mobx-react";
import { List } from "@material-ui/core";

import { SceneStore } from "../../../store/Scene";

import { FinderItem } from "./FinderItem";

import { useStyles } from "./styles";

export const Finder = observer(() => {
  const classes = useStyles();

  const sceneStore = useContext(SceneStore);

  /** Removes object */
  const removeObject = useCallback(
    (id: number) => (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      sceneStore.removeObject(id);
    },
    []
  );

  /** Renames object */
  const renameObject = useCallback(
    (index: number) => (name: string) => {
      sceneStore.renameObject(index, name);
    },
    []
  );

  return (
    <List className={classes.objects}>
      {sceneStore.getObjects.map((object, index) => (
        <FinderItem
          key={object.name + index}
          name={object.name}
          renameObject={renameObject(index)}
          removeObject={removeObject(index)}
        />
      ))}
    </List>
  );
});
