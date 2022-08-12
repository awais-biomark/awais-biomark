import { createStyles, makeStyles } from "@mui/styles";

export const dropDownStyle = makeStyles((theme) =>
  createStyles({
    dropdownRoot: {
      marginBottom: theme.spacing(2),
    },

    menuOptions: {
      "&.MuiTypography-root": {
        color: theme.palette.textGrey,
        fontFamily: ["Mulish", "sans-serif"].join(","),
      },
    },

    menuItem: {
      color: theme.palette.textGrey,
      fontFamily: ["Mulish", "sans-serif"].join(","),
    },

    formLabel: {
      fontFamily: `${["Mulish", "sans-serif"].join(",")} !important`,
      fontSize: "14px !important",
      color: theme.palette.textGrey,
      fontWeight: "700 !important",
      marginBottom: `${theme.spacing(1)} !important`,
      marginTop: `${theme.spacing(1)} !important`,
    },

    menuItems: {
      padding: "0px !important",
    },

    formControl: {
      margin: "5px !important",
      width: "250px",
      height: "50px",
    },

    actionsFormControl: {
      margin: "5px !important",
      width: "230px",
      height: "50px",
    },

  })
);
