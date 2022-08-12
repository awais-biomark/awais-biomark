import { makeStyles } from "@mui/styles";
export const notFoundStyles = makeStyles((theme) => ({
  logo: {
    width: "150px",
    height: "150px",
  },

  heading2: {
    fontSize: "20px !important",
    color: `${theme.palette.textHeadingColor}`,
    fontWeight: "700 !important",
    marginTop: `${theme.spacing(1)} !important`,
  },

  notFoundParent: {
    backgroundColor: "#0F2853",
    zIndex: 99999,
    height: "100vh",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  comingSoonParent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  notfoundpagebox: {
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.white,
    borderRadius: "10px",
    boxShadow: "0px 8px 16px 4px rgba(0, 0, 0, 0.15)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    padding: `${theme.spacing(10)} ${theme.spacing(15)}`,
  },

  comingSoonBox: {
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.white,
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    padding: `${theme.spacing(10)} ${theme.spacing(15)}`,
  },
  notFoundHeading: {
    fontSize: "110px !important",
    color: `${theme.palette.textHeadingColor}`,
    fontWeight: "900 !important",
  },
  comingSoonHeading: {
    fontSize: "50px !important",
    color: `${theme.palette.textHeadingColor}`,
    fontWeight: "900 !important",
    marginTop: `${theme.spacing(3)} !important`,
  },
  backHomeBtn: {
    fontWeight: "600 !important",
    color: "#fff !important",
    marginTop: `${theme.spacing(2)} !important`,

    backgroundColor: `${theme.palette.textHeadingColor}  !important`,
    justifyContent: "center",
  },

  comingSoonBackHomeBtn: {
    fontWeight: "600 !important",
    color: "#fff !important",
    marginTop: `${theme.spacing(5)} !important`,
    backgroundColor: `${theme.palette.textHeadingColor}  !important`,
    justifyContent: "center",
  },

  imgBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    textDecoration: "none",
  },
  notFoundSubHeading: {
    "&.MuiTypography-root": {
      fontSize: "30px !important",
      color: `${theme.palette.textHeadingColor}`,
      fontWeight: "700 !important",
    },
  },
}));
