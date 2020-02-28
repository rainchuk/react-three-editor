import React, { useContext, useMemo, useCallback } from "react";
import { observer } from "mobx-react";
import { ButtonGroup, Button } from "@material-ui/core";

import { SceneStore } from "../../store/Scene";

import { ObjectModificationModes } from "../../types/enums";

import { useStyles } from "./styles";

export const ObjectCotrols = observer(() => {
  const classes = useStyles();

  const sceneStore = useContext(SceneStore);

  const changeMode = useCallback(
    (mode: ObjectModificationModes) => () => {
      sceneStore.changeModificationMode(mode);
    },
    []
  );

  /** Each button fill variant */
  const variants = useMemo(
    () => ({
      scale:
        sceneStore.getModificationMode === ObjectModificationModes.scale
          ? classes.selectedButton
          : "",
      position:
        sceneStore.getModificationMode === ObjectModificationModes.position
          ? classes.selectedButton
          : "",
      rotation:
        sceneStore.getModificationMode === ObjectModificationModes.rotation
          ? classes.selectedButton
          : ""
    }),
    [sceneStore.getModificationMode]
  );

  return (
    <ButtonGroup
      className={classes.buttons}
      color="primary"
      aria-label="outlined primary button group"
    >
      <Button
        className={variants.scale}
        onClick={changeMode(ObjectModificationModes.scale)}
        disableElevation
      >
        {ObjectModificationModes.scale}
      </Button>
      <Button
        className={variants.position}
        onClick={changeMode(ObjectModificationModes.position)}
        disableElevation
      >
        {ObjectModificationModes.position}
      </Button>
      <Button
        className={variants.rotation}
        onClick={changeMode(ObjectModificationModes.rotation)}
        disableElevation
      >
        {ObjectModificationModes.rotation}
      </Button>
    </ButtonGroup>
  );
});
