import { createStyles, makeStyles } from "@mui/styles";

export const formInputStyle = makeStyles((theme) =>
  createStyles({
    formLabel: {
      fontFamily: `${["Mulish", "sans-serif"].join(",")} !important`,
      fontSize: "14px !important",
      color: theme.palette.textGrey,
      fontWeight: "700 !important",
      marginTop: `${theme.spacing(1)} !important`,
      marginBottom: `${theme.spacing(1)} !important`,
    },
  })
);
