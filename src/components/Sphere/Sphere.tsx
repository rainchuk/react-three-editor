import React, { useState, useEffect } from "react";

import {
  SphereBufferGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial
} from "three";

import { SphereObject } from "../../types/interfaces";

/** Component prrops */
type Props = { id: number } & Omit<SphereObject, "name" | "type">;

/** Sphere object */
export const Sphere = (props: Props) => {
  const { rotation, position, radius, widthSegments, heightSegments } = props;

  const [geometry, setGeometry] = useState(
    new SphereBufferGeometry(radius, widthSegments, heightSegments)
  );

  // TODO: change to iteractive material
  const [material, setMaterial] = useState(
    // new MeshBasicMaterial({ color: "hotpink" })
    new MeshPhongMaterial({ color: "hotping", flatShading: true })
  );

  const [mesh, setMesh] = useState(new Mesh(geometry, material));

  useEffect(() => {
    setMesh(new Mesh(geometry, material));
  }, [geometry, material]);

  useEffect(() => {
    mesh.position.x = position[0];
    mesh.position.y = position[1];
    mesh.position.z = position[2];
  }, [position, mesh]);

  useEffect(() => {
    mesh.rotation.x = rotation[0];
    mesh.rotation.y = rotation[1];
    mesh.rotation.z = rotation[2];
  }, [rotation, mesh]);

  return <primitive object={mesh} />;
};

Sphere.defaultProps = {
  phiStart: 0,
  phiLength: 6.3,
  thetaStart: 0,
  thetaLength: 3.1,
  multi: false,
  rotation: [0, 0, 0],
  position: [0, 0, 0]
};
