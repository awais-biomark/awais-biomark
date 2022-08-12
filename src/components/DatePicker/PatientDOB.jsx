import React, { useState, useEffect } from "react";
import { Box, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  dateContainer: {
    // width: "232px",
    // maxWidth: "232px",
    // minWidth: "100px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    width: "30%",
    height: "55px",
    marginRight: `${theme.spacing(0.5)} !important`,
    // color: theme.palette.textGrey,

    "&.css-v456ft-MuiInputBase-root-MuiOutlinedInput-root ": {},
  },
}));

const PatientDOB = ({ setDate, dateOfBirth, handleAge }) => {
  const classes = styles();
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState("Jan");
  const [year, setYear] = useState(1900);

  useEffect(() => {
    if (!!dateOfBirth) {
      let getYear;
      let getMonth;
      let getDay;
      if (dateOfBirth?.includes("-")) {
        getYear = dateOfBirth?.split("-")[0];
        getMonth = dateOfBirth?.split("-")[1];
        getDay = dateOfBirth?.split("-")[2];
      } else {
        getYear = dateOfBirth?.slice(0, 4);
        getMonth = dateOfBirth?.slice(4, 6);
        getDay = dateOfBirth?.slice(6, 8);
      }

      const getMonthAlpha = (month) => {
        if (month == "01") {
          return "Jan";
        } else if (month == "02") {
          return "Feb";
        } else if (month == "03") {
          return "Mar";
        } else if (month == "04") {
          return "Apr";
        } else if (month == "05") {
          return "May";
        } else if (month == "06") {
          return "Jun";
        } else if (month == "07") {
          return "July";
        } else if (month == "08") {
          return "Aug";
        } else if (month == "09") {
          return "Sep";
        } else if (month == "10") {
          return "Oct";
        } else if (month == "11") {
          return "Nov";
        } else if (month == "12") {
          return "Dec";
        }
      };

      setDay(getDay);
      setMonth(getMonthAlpha(getMonth));
      setYear(getYear);
    }
  }, [dateOfBirth]);

  useEffect(() => {
    handleAge(year);
  }, [day, month, year, handleAge]);

  useEffect(() => {
    const getMonthAlpha = (month) => {
      if (month == "Jan") {
        return "01";
      } else if (month == "Feb") {
        return "02";
      } else if (month == "Mar") {
        return "03";
      } else if (month == "Apr") {
        return "04";
      } else if (month == "May") {
        return "05";
      } else if (month == "Jun") {
        return "06";
      } else if (month == "July") {
        return "07";
      } else if (month == "Aug") {
        return "08";
      } else if (month == "Sep") {
        return "09";
      } else if (month == "Oct") {
        return "10";
      } else if (month == "Nov") {
        return "11";
      } else if (month == "Dec") {
        return "12";
      }
    };
    setDate(`${year}-${getMonthAlpha(month)}-${day}`);
  }, [day, month, year, setDate]);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const yearHandler = (e) => {
    const regex = /^[0-9]{0,4}$/;
    if (e.target.value.match(regex)) {
      setYear(e.target.value);
    }
  };

  const dayHandler = (e) => {
    const regex = /^[0-9]{0,2}$/;
    if (e.target.value.match(regex)) {
      setDay(e.target.value);
    }
  };

  return (
    <Box className={classes.dateContainer}>
      <select
        className={classes.date}
        value={month}
        onChange={(e) => setMonth(e.currentTarget.value)}
      >
        {months.map((m, i) => (
          <option key={i} value={m}>
            {m}
          </option>
        ))}
      </select>

      <TextField
        className={classes.date}
        value={day}
        onChange={(e) => dayHandler(e)}
        placeholder="day"
        label="day"
      />
      <TextField
        className={classes.date}
        value={year}
        onChange={(e) => yearHandler(e)}
        placeholder="year"
        label="year"
      />
    </Box>
  );
};

export default PatientDOB;
