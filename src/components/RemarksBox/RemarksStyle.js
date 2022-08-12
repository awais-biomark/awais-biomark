import { createStyles, makeStyles } from "@mui/styles";

export const remarksStyle = makeStyles((theme) =>
  createStyles({
    formLabel: {
      fontFamily: `${["Mulish", "sans-serif"].join(",")} !important`,
      fontSize: "14px !important",
      color: theme.palette.textGrey,
      fontWeight: "700 !important",
      marginTop: `${theme.spacing(1)} !important`,
      marginBottom: `${theme.spacing(1)} !important`,
    },

    remarksInput: {
      marginTop: theme.spacing(1),
      padding: theme.spacing(2),
      "& .MuiOutlinedInput-root": {
        width: "297px !important",
        height: "76.67px !important"
      }
    },

  })
);
