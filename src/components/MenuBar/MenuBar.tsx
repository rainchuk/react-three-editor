import React, { useContext, useCallback } from "react";
import { observer } from "mobx-react";

import { Button } from "@material-ui/core";

import { SceneStore } from "../../store/Scene";

import { ObjectTypes } from "../../types/enums";

import { useStyles } from "./styles";

export const MenuBar = observer(() => {
  const classes = useStyles();

  const sceneStore = useContext(SceneStore);

  /** TODO: fix for object creation */
  // const newObject = useCallback(
  //   (name: string, type: ObjectTypes) => (
  //     event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  //   ) => {
  //     sceneStore.addObject({
  //       name,
  //       type,
  //       position: [Math.random() * 4, Math.random() * 2, Math.random() * 4]
  //     });
  //   },
  //   []
  // );

  const addBox = useCallback(() => {
    sceneStore.addObject({
      name: "Box",
      type: ObjectTypes.box,
      width: 1,
      height: 1,
      depth: 1,
      widthSegments: 10,
      heightSegments: 10,
      depthSegments: 10,
      rotation: [0, 0, 0],
      position: [Math.random() * 4, Math.random() * 2, Math.random() * 4],
      multi: false
    });
  }, []);

  const addSphere = useCallback(() => {
    sceneStore.addObject({
      name: "Sphere",
      type: ObjectTypes.sphere,
      radius: 1,
      widthSegments: 8,
      heightSegments: 6,
      phiStart: 0,
      phiLength: 6.3,
      thetaStart: 0,
      thetaLength: 3.1,
      position: [Math.random() * 4, Math.random() * 2, Math.random() * 4],
      rotation: [0, 0, 0],
      multi: false
    });
  }, []);

  // TODO: Add dropdown next
  return (
    <div className={classes.menu}>
      <Button onClick={addBox}>Add box</Button>
      <Button onClick={addSphere}>Add sphere</Button>
    </div>
  );
});
