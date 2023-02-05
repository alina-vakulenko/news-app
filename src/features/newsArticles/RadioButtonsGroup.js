import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtonsGroup({ title, value, onChange, options }) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{title}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={value}
        onChange={onChange}
        name="radio-buttons-group"
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.displayedValue}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
