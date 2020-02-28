import React from "react";
import { Grid, Typography, Slider } from "@material-ui/core";

import { toFixed } from "../../utils/numberToFixed";
import { ObjectType } from "../../types/types";

/** Component args */
interface Args {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (event: React.ChangeEvent<{}>, value: number | number[]) => void;
}

export const LabelSlider = (args: Args) => {
  const { label, min, max, step, value, onChange } = args;

  return (
    <>
      <Grid container justify="space-between" alignItems="center">
        <Typography variant="body2">{label}</Typography>
        <Typography variant="body2">{toFixed(value, 2)}</Typography>
      </Grid>
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
