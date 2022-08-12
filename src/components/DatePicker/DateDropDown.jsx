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

const DateDropDown = ({
  dateOfBirth,
  handleAge,
  setDate,
  date,
  order,
  selectedPatient,
}) => {
  const classes = styles();
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState("Jan");
  const [year, setYear] = useState(1900);
  let birthDate = dateOfBirth?.split("-");
  let collectionDate = date && date.split("-");

  useEffect(() => {
    if (date) {
      setDay(collectionDate[2]);
      setMonth(collectionDate[1]);
      setYear(collectionDate[0]);
    }
  }, [date]);

  useEffect(() => {
    if (order && birthDate) {
      setDay(birthDate[2]);
      setMonth(birthDate[1]);
      setYear(birthDate[0]);
    } else {
      setDay(1);
      setMonth("Jan");
      setYear(1900);
    }
  }, [order]);

  useEffect(() => {
    const year = selectedPatient?.date_of_birth?.slice(0, 4);
    const month = selectedPatient?.date_of_birth?.slice(4, 6);
    const day = selectedPatient?.date_of_birth?.slice(6, 8);

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

    if (selectedPatient) {
      setDay(day);
      setMonth(getMonthAlpha(month));
      setYear(year);
    } else {
      setDay(1);
      setMonth("Jan");
      setYear(1900);
    }
  }, [selectedPatient]);

  useEffect(() => {
    if (dateOfBirth) {
      if (year / 1000 > 1 && month && day) {
        handleAge(dateOfBirth);
      }
    }
  }, [dateOfBirth, day, handleAge, month, year]);

  useEffect(() => {
    setDate(`${year}-${month}-${day}`);
  }, [day, month, setDate, year]);

  const getMonth = (monthStr) => {
    return new Date(monthStr + "-1-01").getMonth() + 1;
  };

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

  const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();
  const [years, setYears] = useState([]);
  const [days, setDays] = useState([]);
  const startYear = 1900;
  const startDay = 1;

  useEffect(() => {
    setYears(
      Array.from(
        new Array(new Date().getFullYear() - startYear + 1),
        (val, index) => startYear + index
      )
    );
    setDays(
      Array.from(
        new Array(getDaysInMonth(year, getMonth(month))),
        (_val, index) => startDay + index
      )
    );
  }, [year, month, day]);

  return (
    <Box className={classes.dateContainer}>
      <select
        className={classes.date}
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      >
        {months.map((m, i) => (
          <option key={i} value={m}>
            {m}
          </option>
        ))}
      </select>

      <select
        className={classes.date}
        value={day}
        onChange={(e) => setDay(e.target.value)}
      >
        {days.map((day, index) => {
          return (
            <option key={index} value={day}>
              {day}
            </option>
          );
        })}
      </select>

      <select
        className={classes.date}
        value={year}
        onChange={(e) => setYear(e.target.value)}
      >
        {years.map((year, index) => {
          return (
            <option key={index} value={year}>
              {year}
            </option>
          );
        })}
      </select>
    </Box>
  );
};

export const TimeBox = ({ setTime, time }) => {
  const classes = styles();
  const [hours, setHours] = useState("");
  const [minute, setMinutes] = useState("");
  const [meridiem, setMeridiem] = useState("am");

  let collectionTime = time ? time.split(":") : "";

  useEffect(() => {
    if (time) {
      collectionTime[0] > 12 ? setMeridiem("pm") : setMeridiem("am");
      let temp = parseInt(collectionTime[0]);
      temp = temp - 12;
      if (temp < 10) temp = `0${temp}`;
      collectionTime[0] > 12
        ? setHours(temp.toString())
        : setHours(collectionTime[0]);
      setMinutes(collectionTime[1]);
    }
    setTime(`T${hours}:${minute}:00.000`);
  }, [time]);

  const handleTime = () => {
    let temp = parseInt(hours);
    if (meridiem === "pm") temp += 12;
    setTime && setTime(`T${temp}:${minute}:00.000`);
  };

  useEffect(() => hours && minute && meridiem && handleTime());

  const hour = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  const minutes = [];

  for (var i = 1; i <= 60; i++) {
    minutes.push(("0" + i).slice(-2));
  }

  const handleHours = (event) => setHours(event.target.value);
  const handleMinutes = (event) => setMinutes(event.target.value);
  const handleMeridiem = (event) => setMeridiem(event.target.value);

  return (
    <Box className={classes.dateContainer}>
      <select className={classes.date} onChange={handleHours} value={hours}>
        <option value="">HH</option>
        {hour.map((h, i) => (
          <option key={i} value={h}>
            {h}
          </option>
        ))}
      </select>
      <select className={classes.date} onChange={handleMinutes} value={minute}>
        <option value="">MM</option>
        {minutes.map((m, i) => (
          <option key={i} value={m}>
            {m}
          </option>
        ))}
      </select>
      <select
        className={classes.date}
        onChange={handleMeridiem}
        value={meridiem}
      >
        <option value="am">AM</option>
        <option value="pm">PM</option>
      </select>
    </Box>
  );
};

export default DateDropDown;
