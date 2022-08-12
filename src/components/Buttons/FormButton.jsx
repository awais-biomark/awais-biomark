import React from "react";
import { Button } from "@material-ui/core";
import { buttonStyle } from "./FormButtonStyle";

const FormButton = ({title, handleClickOpen}) => {
  const classes = buttonStyle();

  return (
    <Button className={classes.btn} onClick={handleClickOpen}>
      {title}
    </Button>
  );
};

export default FormButton;
