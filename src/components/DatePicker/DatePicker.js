import React from "react";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import onDateChange from "react-google-flight-datepicker";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  datestyling: {
    potision: "absolute",
    top: "-43px",
    "&.date-picker": {
      padding: theme.spacing(0.5),
      borderRadius: "10px",
    },
    "& .date-picker-input": {
      height: "25px",
      cursor: "pointer",
      border: "none",
    },
    "& .open": {
      left: "inherit",
      right: 0,
    },
    "& .hide": {
      left: "inherit",
      right: 0,
    },
    "& .icon-calendar": {
      display: "none",
    },
    "& .selected-date": {
      padding: `0px ${theme.spacing(1)}`,
      justifyContent: "center",
      width: "100%",
      fontSize: "14px",
      fontFamily: ["Mulish", "sans-serif"].join(","),
    },
    "& .change-date-group": {
      display: "none",
    },
    "& .date.is-focus": {
      background: "transparent",
    },
    "& .date.is-focus::after": {
      border: "transparent",
    },
  },
}));

const DatePicker = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <RangeDatePicker
        startDate={new Date()}
        endDate={new Date()}
        onChange={(startDate, endDate) => onDateChange(startDate, endDate)}
        minDate={new Date(1900, 0, 1)}
        maxDate={new Date(2100, 0, 1)}
        dateFormat="MMM D YYYY"
        startDatePlaceholder="Start Date"
        endDatePlaceholder="End Date"
        disabled={false}
        className={classes.datestyling}
        startWeekDay="monday"
      />
    </Box>
  );
};

export default DatePicker;
