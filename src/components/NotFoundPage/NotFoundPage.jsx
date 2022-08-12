import React from "react";
import { useNavigate } from "react-router-dom";

import "styles/loaderStyle.css";
import { Box, Button, Typography } from "@mui/material";
import bioMarkLogoVertical from "assets/bioMarkLogoVertical.svg";
import { notFoundStyles } from "./pageNotFoundStyles";

const NotFoundPage = () => {
  const classes = notFoundStyles();
  const navigate = useNavigate();
  return (
    <Box className={classes.notFoundParent}>
      <Box className={classes.notfoundpagebox}>
        <Box className={classes.imgBox}>
          <img className={classes.logo} src={bioMarkLogoVertical} alt="" />
          <Typography className={classes.notFoundHeading}>404</Typography>
          <Typography className={classes.notFoundSubHeading}>
            Oops! Page Not Found
          </Typography>
          <Typography className={classes.heading2}>
            Sorry the Page you are looking for does not exist
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

export default NotFoundPage;
