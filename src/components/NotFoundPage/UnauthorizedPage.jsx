import React from "react";
import { useNavigate } from "react-router-dom";

import "styles/loaderStyle.css";
import { Box, Button, Typography } from "@mui/material";
import bioMarkLogoVertical from "assets/bioMarkLogoVertical.svg";
import { notFoundStyles } from "./pageNotFoundStyles";
const UnauthorizedPage = () => {
  const classes = notFoundStyles();
  const navigate = useNavigate();
  return (
    <Box className={classes.notFoundParent}>
      <Box className={classes.notfoundpagebox}>
        <Box className={classes.imgBox}>
          <img className={classes.logo} src={bioMarkLogoVertical} alt="" />
          <Typography className={classes.notFoundHeading}>401</Typography>
          <Typography className={classes.notFoundSubHeading}>
            UNAUTHORIZED
          </Typography>
          <Typography className={classes.heading2}>
            Sorry your request is Unauthorized
          </Typography>
        </Box>
        <Box>
          <Button className={classes.backHomeBtn} onClick={() => navigate(-1)}>
            Back
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UnauthorizedPage;
