import React, { useContext, useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";

import { Mesh, BoxBufferGeometry, MeshBasicMaterial, AxesHelper } from "three";
import { SceneStore } from "../../store/Scene";
import { useFrame } from "react-three-fiber";

/** Box props */
export interface BoxProps {
  id: number;
  size: [number, number, number];
  segments: [number, number, number];
  color: number | string;
  position: [number, number, number];
  multi: boolean;
}

/** Box model */
const BoxComponent = (props: BoxProps) => {
  const { id, size, segments, color, position, multi } = props;

  const sceneStore = useContext(SceneStore);

  const axesHelper = new AxesHelper(1);

  const geometry = new BoxBufferGeometry(...size, ...segments);
  const material = new MeshBasicMaterial();

  typeof color === "number"
    ? material.color.setHex(color)
    : material.color.setColorName(color);

  const mesh = new Mesh(geometry, material);

  useFrame(() => {
    if (id === sceneStore.getSelectedId) {
      mesh.add(axesHelper);
    } else {
      mesh.remove(axesHelper);
    }

    material.wireframe =
      id === sceneStore.getSelectedId || sceneStore.getSelectedIds.includes(id);
  });

  mesh.position.x = position[0];
  mesh.position.y = position[1];
  mesh.position.z = position[2];

  /**
   * Handles click. If pressed with "shift" adding second object
   */
  const selectObject = useCallback(() => {
    if (multi && sceneStore.getSelectedId !== id) {
      sceneStore.selectObjects(id);
    } else if (!multi) {
      sceneStore.selectObject(id);
      sceneStore.resetSelectedObjects();
    }
  }, [sceneStore.getSelectedId, sceneStore.getSelectedIds, multi]);

  return <primitive object={mesh} onClick={selectObject} />;
};

BoxComponent.defaultProps = {
  size: [1, 1, 1],
  segments: [10, 10, 10],
  color: "hotpink",
  multi: false
};

export const Box = observer(BoxComponent);
