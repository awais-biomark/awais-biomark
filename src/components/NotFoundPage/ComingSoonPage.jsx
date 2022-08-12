import React from "react";
import { useNavigate } from "react-router-dom";

import "styles/loaderStyle.css";
import { Box, Button, Typography } from "@mui/material";
import bioMarkLogoVertical from "assets/bioMarkLogoVertical.svg";
import { notFoundStyles } from "./pageNotFoundStyles";

const ComingSoonPage = ({ backBtn }) => {
  const classes = notFoundStyles();
  const navigate = useNavigate();
  return (
    <Box className={classes.comingSoonParent}>
      <Box className={classes.comingSoonBox}>
        <Box className={classes.imgBox}>
          <img className={classes.logo} src={bioMarkLogoVertical} alt="" />
          <Typography className={classes.comingSoonHeading}>
            {backBtn ? "Preparing your dashboard" : "Coming Soon"}
          </Typography>

          <Typography className={classes.heading2}>
            We are working hard to bring you the best experience possible.
          </Typography>
          <Typography className={classes.heading2}>
            Meanwhile the Accounts and Data Entry functions can be used.
          </Typography>
        </Box>
        <Box>
          {!backBtn && (
            <Button
              className={classes.comingSoonBackHomeBtn}
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ComingSoonPage;
