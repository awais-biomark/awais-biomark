import { createStyles, makeStyles } from "@mui/styles";

export const buttonStyle = makeStyles((theme) =>
  createStyles({
    btn: {
      backgroundColor: `${theme.palette.textHeadingColor} !important`,
      color: `${theme.palette.white} !important`,
      borderRadius: "44px !important",
      marginRight: `${theme.spacing(3)} !important`,
      paddingLeft: `${theme.spacing(2)} !important`,
      paddingRight: `${theme.spacing(2)} !important`,
    },
  })
);
