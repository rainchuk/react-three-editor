import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo
} from "react";
import { observer } from "mobx-react";

import {
  SphereBufferGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial
} from "three";

import { SphereObject } from "../../types/interfaces";
import { SceneStore } from "../../store/Scene";

/** Component prrops */
type Props = { id: number } & Omit<SphereObject, "name" | "type">;

/** Sphere object */
const SphereModel = (props: Props) => {
  const {
    id,
    rotation,
    position,
    radius,
    widthSegments,
    heightSegments
  } = props;

  const sceneStore = useContext(SceneStore);

  const [geometry, setGeometry] = useState(
    new SphereBufferGeometry(radius, widthSegments, heightSegments)
  );

  // TODO: change to iteractive material
  const [material, setMaterial] = useState(
    // new MeshBasicMaterial({ color: "hotpink" })
    new MeshPhongMaterial({ color: "hotping", flatShading: true })
  );

  const [mesh, setMesh] = useState(new Mesh(geometry, material));

  /** Handles click */
  const handleClick = useCallback(() => {
    console.log("Clicked");
    sceneStore.selectObject(id);
  }, []);

  /** Updates mesh */
  useEffect(() => {
    setMesh(new Mesh(geometry, material));
  }, [geometry, material]);

  /** Updates radius */
  useEffect(() => {
    setGeometry(
      new SphereBufferGeometry(radius, widthSegments, heightSegments)
    );
  }, [radius, widthSegments, heightSegments]);

  /** Updates mesh position */
  useEffect(() => {
    mesh.position.x = position[0];
    mesh.position.y = position[1];
    mesh.position.z = position[2];
  }, [position, mesh]);

  /** Updates mesh rotation */
  useEffect(() => {
    mesh.rotation.x = rotation[0];
    mesh.rotation.y = rotation[1];
    mesh.rotation.z = rotation[2];
  }, [rotation, mesh]);

  return <primitive object={mesh} onClick={handleClick} />;
};

SphereModel.defaultProps = {
  phiStart: 0,
  phiLength: 6.3,
  thetaStart: 0,
  thetaLength: 3.1,
  multi: false,
  rotation: [0, 0, 0],
  position: [0, 0, 0]
};

export const Sphere = observer(SphereModel);
