import React from "react";
import { Typography } from "@mui/material";
import { TextField } from "@material-ui/core";
import { remarksStyle } from "./RemarksStyle";

const Remarks = () => {
  const classes = remarksStyle();

  return (
    <div className={classes.remarksRoot}>
      <Typography className={classes.formLabel}>Remarks</Typography>
      <TextField
        required
        variant="outlined"
        placeholder="Placeholder"
        className={classes.remarksInput}
      />
    </div>
  );
};

export default Remarks;
