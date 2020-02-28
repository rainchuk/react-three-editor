import React, {
  useMemo,
  useCallback,
  useContext,
  useState,
  useEffect
} from "react";
import { observer } from "mobx-react";

import { Canvas, extend, CanvasContext } from "react-three-fiber";
import {
  Mesh,
  BoxBufferGeometry,
  MeshPhongMaterial,
  SpotLight,
  SpotLightHelper,
  PCFSoftShadowMap
} from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import {
  Plane,
  Controls,
  ObjectCotrols,
  Box,
  ObjectPropsPanel,
  MenuBar
} from "./components";
import { GraphicModesEnum } from "./types/enums";

import { useStyles } from "./styles";
import { SceneStore } from "./store/Scene";
import { Object } from "./types/interfaces";

import { defineObject } from "./utils/defineObjectByType";

extend({ OrbitControls });

export default observer(() => {
  const classes = useStyles();

  const store = useContext(SceneStore);

  const [multiSelectMode, setMultiSelectMode] = useState<boolean>(false);

  const light = new SpotLight();

  light.position.set(8, 15, 25);

  light.castShadow = true;

  light.shadow.mapSize.width = 1024;
  light.shadow.mapSize.height = 1024;

  light.penumbra = 1;

  const lightHelper = new SpotLightHelper(light);

  /** Plane config */
  const planeConfig = useMemo(
    () => ({
      size: {
        x: 10,
        y: 10
      },
      mode: GraphicModesEnum.draft
    }),
    []
  );

  useEffect(() => {
    document.addEventListener("keydown", turnOnMultiSelected);
    document.addEventListener("keyup", turnOffMultiSelected);
    return () => {
      document.removeEventListener("keydown", turnOnMultiSelected);
      document.removeEventListener("keyup", turnOffMultiSelected);
    };
  }, []);

  const turnOnMultiSelected = (event: KeyboardEvent) => {
    if (event.keyCode === 16) {
      setMultiSelectMode(true);
    }
  };

  const turnOffMultiSelected = (event: KeyboardEvent) => {
    if (event.keyCode === 16) {
      setMultiSelectMode(false);
    }
  };

  /** Canvas setup */
  const canvasSetUp = useCallback((setup: CanvasContext) => {
    const { gl } = setup;

    gl.shadowMap.enabled = true;
    gl.shadowMap.type = PCFSoftShadowMap;
  }, []);

  return (
    <>
      <MenuBar />
      <ObjectCotrols />
      <ObjectPropsPanel />
      <Canvas onCreated={canvasSetUp}>
        <primitive object={light} />
        <Controls />
        <Plane {...planeConfig} />
        {store.getObjects.map<React.ReactNode>((object, index) =>
          defineObject(object, index)
        )}
      </Canvas>
    </>
  );
});
