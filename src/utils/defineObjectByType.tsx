import React from "react";

import { Box, Sphere } from "../components";

import { ObjectTypes } from "../types/enums";
import { BoxObject, SphereObject } from "../types/interfaces";

type Args = BoxObject | SphereObject;

/** Returns object with id by type */
export const defineObject = (args: Args, id: number) => {
  const { position } = args;

  switch (args.type) {
    case ObjectTypes.box:
      return <Box key={id} id={id} position={position} />;
    case ObjectTypes.sphere:
      const { radius, widthSegments, heightSegments } = args;
      return (
        <Sphere
          key={id}
          id={id}
          radius={radius}
          widthSegments={widthSegments}
          heightSegments={heightSegments}
          position={position}
        />
      );
  }
};
