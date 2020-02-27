import { MeshBasicMaterial, MeshPhongMaterial, Color } from "three";
import { MaterialTypesEnum } from "../types/enums";

/** Args */
interface Args {
  type: MaterialTypesEnum;
  color: number | Color;
  wire: boolean;
}

/** Define object material */
export const defineMaterial = (args: Args) => {
  const { type, color, wire } = args;

  switch (type) {
    case MaterialTypesEnum.basic:
      return new MeshBasicMaterial({ color, wireframe: wire });
    case MaterialTypesEnum.phong:
      return new MeshPhongMaterial({ color, wireframe: wire });
  }
};
