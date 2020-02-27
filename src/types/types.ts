import { BoxObject, SphereObject } from "./interfaces";

/** Objects */
export type ObjectType = BoxObject | SphereObject;

/** Args */
export type BoxArgs = Omit<BoxObject, "name">;
export type SphereArgs = Omit<
  SphereObject,
  "phiStart" | "phiLength" | "thetaStart" | "thetaLength" | "name"
>; // TODO: remove after testing
