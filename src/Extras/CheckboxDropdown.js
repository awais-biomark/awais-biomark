import React, { useState } from "react";
import Select from '@mui/material/Select';
import { Typography } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { dropDownStyle } from "./dropDownStyle";

const CheckboxDropdown = ({ title, optionsList, actionsFlag }) => {
  const classes = dropDownStyle();

  const [field, setField] = useState([]);

  const handleChange = (event) => {
    const { target: { value } } = event;
    setField(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div className={classes.dropdownRoot}>
      {!actionsFlag && <Typography className={classes.formLabel}>{title}</Typography>}
      <FormControl className={actionsFlag ? classes.actionsFormControl : classes.formControl}>
        <InputLabel id="demo-multiple-checkbox-label">{title}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={field}
          onChange={handleChange}
          input={<OutlinedInput label={title} />}
          renderValue={(selected) => selected.join(", ")}
        >
          {optionsList.map((name) => (
            <MenuItem className={classes.menuItems} key={name} value={name}>
              <Checkbox checked={field.indexOf(name) > -1} />
              <ListItemText primary={name} className={classes.menuItem} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CheckboxDropdown;
