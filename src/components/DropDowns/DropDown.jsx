import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
import { dropDownStyle } from "./DropdownStyle";

const DropDown = ({ title, optionsList }) => {
  const classes = dropDownStyle();

  const [field, setField] = useState("");

  const handleChange = (event) => {
    setField(event.target.value);
  };

  return (
    <div className={classes.dropdownRoot}>
      <FormControl sx={{ m: 1, width: 250, height: 50 }}>
        <InputLabel id="demo-simple-select-helper-label">{title}</InputLabel>
        <Select
          value={field}
          onChange={handleChange}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label={title}
        >
          {optionsList.map((options, index) => {
            return (
              <MenuItem key={index} value={index}>
                <Typography className={classes.menuOptions}>
                  {options}
                </Typography>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDown;
