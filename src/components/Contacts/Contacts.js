import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Box } from "@mui/material";
import "react-phone-input-2/lib/style.css";
import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  contacts: {
    "& .form-control": {
      height: "57px",
      width: "100%",
    },
    "& .flag-dropdown": {
      backgroundColor: theme.palette.white,
    },
  },
}));

const Contacts = (props) => {
  const classes = styles();
  const { setNumber, getNumber, selectedInfo } = props;
  const [phone, setPhone] = useState();

  return (
    <>
      <Box>
        <PhoneInput
          defa
          className={classes.contacts}
          countryCodeEditable={false}
          onlyCountries={["sg", "my", "id"]}
          value={getNumber}
          onChange={
            !!selectedInfo
              ? setNumber(getNumber)
              : (number) => setNumber(number)
          }
          error={phone}
          country="sg"
          isValid={(value, country) => {
            if (value.startsWith("65") && value.length === 10) {
              return true;
            }
            if (value.startsWith("60") && value.length === 12) {
              return true;
            }
            if (value.startsWith("62") && value.length === 15) {
              return true;
            }
            if (value.length === 2) {
              return true;
            } else {
              return "";
            }
          }}
        />
      </Box>
    </>
  );
};
export default Contacts;
