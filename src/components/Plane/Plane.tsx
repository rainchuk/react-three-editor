import React, { useMemo } from "react";
import * as THREE from "three";
import { GraphicModesEnum } from "../../types/enums";

/** Component props */
export interface PlaneProps {
  mode: GraphicModesEnum;
  size: {
    x: number;
    y: number;
  };
  position: {
    x: number;
    y: number;
    z: number;
  };
  rotation: {
    x: number;
    y: number;
    z: number;
  };
  // TODO: add more props
}

export const Plane = (props: PlaneProps) => {
  const { size, mode, position, rotation } = props;

  const receiveShadow = useMemo(() => mode === GraphicModesEnum.draft, [mode]);

  console.log("Plane shadows:", receiveShadow);

  const grid = new THREE.GridHelper(size.x, 9);

  grid.position.x = position.x;
  grid.position.y = position.y;
  grid.position.z = position.z;

  // const plane = new THREE.PlaneBufferGeometry(
  //   size.x,
  //   size.y,
  //   size.x * 10,
  //   size.y * 10
  // );

  // const planeMaterial = new THREE.MeshPhongMaterial();

  // planeMaterial.color.setColorName("hotpink");
  // planeMaterial.flatShading = true;

  // const planeMesh = new THREE.Mesh(plane, planeMaterial);

  return <primitive object={grid} receiveShadow />;
};

Plane.defaultProps = {
  mode: GraphicModesEnum.draft,
  size: {
    x: 10,
    y: 10
  },
  position: {
    x: 0,
    y: -1,
    z: 0
  },
  rotation: {
    x: -Math.PI / 2,
    y: 0,
    z: 0
  }
};
