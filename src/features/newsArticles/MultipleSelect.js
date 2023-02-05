import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

import { MenuProps, options } from "../../utils/multipleSelect";

export default function MultipleSelect() {
  const [selected, setSelected] = useState([]);
  const isAllSelected =
    options.length > 0 && selected.length === options.length;

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }
    setSelected(value);
  };
  const selectedStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
    },
  };

  return (
    <FormControl sx={{ width: 230 }}>
      <InputLabel id="mutiple-select-label">Choose source</InputLabel>
      <Select
        labelId="mutiple-select-label"
        multiple
        value={selected}
        onChange={handleChange}
        renderValue={(selected) => selected.length + " Selected"}
        MenuProps={MenuProps}
      >
        <MenuItem
          value="all"
          //   classes={{
          //     root: isAllSelected
          //     ? classes.selectedAll
          //     : "",
          //   }}
        >
          <ListItemIcon>
            <Checkbox
              //   classes={{ indeterminate: classes.indeterminateColor }}
              checked={isAllSelected}
              indeterminate={
                selected.length > 0 && selected.length < options.length
              }
            />
          </ListItemIcon>
          <ListItemText
            // classes={{ primary: classes.selectAllText }}
            primary="Select All"
          />
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            <ListItemIcon>
              <Checkbox checked={selected.indexOf(option) > -1} />
            </ListItemIcon>
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
