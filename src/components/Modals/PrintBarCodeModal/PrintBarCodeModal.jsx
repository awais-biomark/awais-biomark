import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Barcode from "react-barcode";

const styles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // height: "100vh",
    // width: "100%",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  notifiactionBox: {
    minWidth: "20vw",
    maxWidth: "100vw",
    backgroundColor: theme.palette.white,
    boxShadow: "0px 10px 40px -20px rgba(56, 73, 107, 0.2)",
    borderRadius: "8px",
    padding: `${theme.spacing(2)}`,
  },
  iconColor: {
    color: theme.palette.grey[500],
    cursor: "pointer",
  },
  barcodeSection: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderBottom: `2px solid ${theme.palette.grey[200]}`,
    marginBottom: theme.spacing(1),
  },
  barcodeSectionHeading: {
    fontWeight: "700 !important",
    fontSize: "20px !important",
    color: theme.palette.textHeadingColor,
  },
  barcodeSectionDetails: {
    display: "flex",
  },
  barcodeSectionDetailsName: {
    fontSize: "15px !important",
    color: theme.palette.textHeadingColor,
    marginRight: `${theme.spacing(1)} !important`,
    fontWeight: "600 !important",
  },
  barcodeSectionDetailsNameList: {
    display: "flex",
    flexWrap: "wrap",
    width: "80%",
    marginBottom: theme.spacing(1),
  },
  samplesDetails: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  samplesDetailsBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  sampleDetailsTextFileds: {
    width: "70px !important",
    "& .MuiOutlinedInput-input": {
      padding: "2px 5px",
      textAlign: "center",
    },
  },
  sampleDetailsBtn: {
    cursor: "pointer",
    color: theme.palette.textHeadingColor,
    margin: `0 ${theme.spacing(1)}`,
    fontWeight: "700",
    fontSize: "20px",
  },
  specimenListBottomBtn: {
    "&.MuiButton-root": {
      color: theme.palette.white,
      backgroundColor: theme.palette.secondaryColor,
      borderRadius: "30px",
      fontWeight: "700",
      fontSize: "16px",
      border: ` 1px solid ${theme.palette.grey[300]}`,
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      letterSpacing: "0.5px",
      "&:hover": {
        backgroundColor: theme.palette.secondaryColor,
        color: theme.palette.white,
      },
    },
  },
}));

const PrintBarCodeModal = ({ setPrintBarCodeModalConfig }) => {
  const classes = styles();

  const [samples, setSamples] = useState([
    {
      name: "EDTA 1",
      checked: false,
      value: 2,
    },
    { name: "EDTA 2", checked: false, value: 0 },
    { name: "EDTA 3", checked: false, value: 2 },
    { name: "Flouride 1", checked: false, value: 5 },
    { name: "Flouride 2", checked: false, value: 3 },
    { name: "Flouride 3", checked: false, value: 1 },
  ]);

  const checkBoxHandler = (index, value) => {
    let checkBox = [...samples];
    checkBox[index] = { ...checkBox[index], checked: value };
    setSamples(checkBox);
  };

  const valueHandler = (index, value) => {
    if (value >= 0) {
      let getValues = [...samples];
      getValues[index] = { ...getValues[index], value };
      setSamples(getValues);
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.notifiactionBox}>
        <CloseIcon
          className={classes.iconColor}
          onClick={() => setPrintBarCodeModalConfig(false)}
        />
        <Box className={classes.barcodeSection}>
          <Box className={classes.barcodeSection}>
            <Typography className={classes.barcodeSectionHeading}>
              Print Barcodes
            </Typography>
            <Box>
              <Box className={classes.barcodeSectionDetails}>
                <Typography className={classes.barcodeSectionDetailsName}>
                  Name:
                </Typography>
                <Typography className={classes.barcodeSectionDetailsName}>
                  Connie Smith
                </Typography>
              </Box>
              <Box className={classes.barcodeSectionDetails}>
                <Typography className={classes.barcodeSectionDetailsName}>
                  Patient ID:
                </Typography>
                <Typography className={classes.barcodeSectionDetailsName}>
                  S987123A4
                </Typography>
              </Box>
            </Box>
            <Barcode
              value="21-17000001"
              fontSize="15px"
              height="60"
              width="2"
            />
          </Box>

          <Box>
            <Typography className={classes.barcodeSectionDetailsName}>
              Sample:
            </Typography>
            <Box className={classes.barcodeSectionDetailsNameList}>
              {samples.map((s) => (
                <Typography className={classes.barcodeSectionDetailsName}>
                  {s.name}
                </Typography>
              ))}
            </Box>
            {samples.map((s, i) => (
              <Box className={classes.samplesDetails}>
                <Box className={classes.samplesDetailsBox}>
                  <Checkbox
                    value={s.checked}
                    onChange={() => checkBoxHandler(i, !s.checked)}
                  />
                  <Typography className={classes.barcodeSectionDetailsName}>
                    {s.name}
                  </Typography>
                </Box>
                <Box className={classes.samplesDetailsBox}>
                  <span
                    onClick={() => valueHandler(i, s.value - 1)}
                    className={classes.sampleDetailsBtn}
                  >
                    -
                  </span>
                  <TextField
                    value={s.value}
                    onChange={(e) => valueHandler(i, e.target.value)}
                    className={classes.sampleDetailsTextFileds}
                  />
                  <span
                    onClick={() => valueHandler(i, s.value + 1)}
                    className={classes.sampleDetailsBtn}
                  >
                    +
                  </span>
                </Box>
              </Box>
            ))}
          </Box>
          <Button
            onClick={() => setPrintBarCodeModalConfig(false)}
            className={`${classes.specimenListBottomBtn} ${classes.printBarCodeBtn}`}
          >
            Print Barcode
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PrintBarCodeModal;
