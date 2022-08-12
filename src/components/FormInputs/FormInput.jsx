import React from "react";
import { Typography } from "@mui/material";
import { TextField } from "@material-ui/core";
import { formInputStyle } from "./FormInputStyle";

const FormInput = ({title, inputClass, placeholder}) => {
  const classes = formInputStyle();
  return (
    <>
      <Typography className={classes.formLabel}>{title}</Typography>
      <TextField
        required
        variant="outlined"
        placeholder={placeholder}
        className={inputClass}
      />
    </>
  );
};

export default FormInput;
