import { ReactNode } from "react";
import { ObjectTypes } from "./enums";

/** Geometry */
export interface Geometry {
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
}

/** Temp object variant TODO: remove after testing */
export interface TempObject {
  // TODO: add material, object properties
  id?: number;
  type: ObjectTypes;
  name: string;
  position: [number, number, number];
  rotation?: [number, number, number];
}

/** Object */
export interface Object {
  // TODO: add material, object properties
  name: string;
  position: [number, number, number];
  rotation: [number, number, number];
  multi: boolean;
}

/** Box object */
export interface BoxObject extends Object {
  type: ObjectTypes.box;
  width: number;
  height: number;
  depth: number;
  widthSegments: number;
  heightSegments: number;
  depthSegments: number;
}

/** Sphere object */
export interface SphereObject extends Object {
  type: ObjectTypes.sphere;
  radius: number;
  widthSegments: number;
  heightSegments: number;
  phiStart: number;
  phiLength: number;
  thetaStart: number;
  thetaLength: number;
}
