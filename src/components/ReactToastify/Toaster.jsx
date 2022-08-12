import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
  },
}));

const Toaster = ({ type, message }) => {
  const classes = styles();

  if (type === "success") {
    toast.success(message, { toastId: "customId" });
  } else if (type === "error") {
    toast.error(message, { toastId: "customId" });
  } else {
    toast(message, { toastId: "customId" });
  }

  return (
    <div>
      <ToastContainer className={classes.root} />
    </div>
  );
};

export default Toaster;
