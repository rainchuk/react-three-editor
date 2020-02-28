import React, { useContext, useCallback, useState } from "react";
import { observer } from "mobx-react";
import { Button, Menu, MenuItem } from "@material-ui/core";

import { SceneStore } from "../../store/Scene";
import { ObjectTypes } from "../../types/enums";

import { useStyles } from "./styles";

export const MenuBar = observer(() => {
  const classes = useStyles();

  const sceneStore = useContext(SceneStore);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  /** Opens menu */
  const openMenu = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  /** Closes menu */
  const closeMenu = useCallback(() => {
    setAnchorEl(null);
  }, []);

  /** Adds box with default values */
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
    closeMenu();
  }, []);

  /** Adds sphere with default values */
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
    closeMenu();
  }, []);

  return (
    <div className={classes.menu}>
      <Button
        aria-controls="add-object"
        aria-haspopup="true"
        onClick={openMenu}
      >
        Add
      </Button>
      <Menu
        id="add-object"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <MenuItem onClick={addBox}>Box</MenuItem>
        <MenuItem onClick={addSphere}>Sphere</MenuItem>
      </Menu>
    </div>
  );
});
