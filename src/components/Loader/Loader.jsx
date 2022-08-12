import { Box } from "@mui/material";
import React from "react";
import { Puff } from "react-loader-spinner";
import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    position: "fixed",
    top: "0",
    left: "0",
    overflow: "hidden",
    zIndex: 99999,
  },

  blurBg: {
    width: "inherit",
    height: "inherit",
    backgroundColor: "rgba(211,211,211,0.4)",
  },
  whiteBg: {
    width: "inherit",
    height: "inherit",
    backgroundColor: "white",
  },
  loader: {
    width: "inherit",
    height: "inherit",
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "999",
  },
}));

const Loader = ({ bgWhite }) => {
  const classes = styles();

  return (
    <Box className={classes.root}>
      <Box className={bgWhite ? classes.whiteBg : classes.blurBg}></Box>
      <Box className={classes.loader}>
        <Puff color="#273859" height={80} width={80} />
      </Box>
    </Box>
  );
};

export default Loader;
