import React, { useRef } from "react";
import { useThree, useFrame } from "react-three-fiber";

/** Ref object */
interface Controls {
  update(): void;
}

export const Controls = () => {
  const controlsRef = useRef<Controls>();
  const { camera, gl } = useThree();

  useFrame(() => {
    controlsRef?.current?.update();
  });

  return <orbitControls args={[camera, gl.domElement]} ref={controlsRef} />;
};
