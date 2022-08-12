import { makeStyles } from "@mui/styles";

export const headerStyle = makeStyles((theme) => ({
  appBar: {
    backgroundColor: `${theme.palette.white} !important`,
    color: `${theme.palette.black} !important`,
    boxShadow: "0px 4px 12px rgba(136, 136, 136, 0.1) !important",
  },

  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },

  navBarHandle: {
    flexGrow: "1",
    display: "flex",
    justifyContent: "space-between",
  },

  logo: {
    display: "flex",
    alignItems: "center",
  },

  logoImage: {
    width: "148px",
    height: "44.23px",
  },

  search: {
    display: "flex",
    alignItems: "center",
  },

  searchField: {
    "& .MuiOutlinedInput-input": {
      paddingTop: "14px",
      paddingBottom: "14px",
    },
  },

  icons: {
    display: "flex",
    alignItems: "center",
  },

  badge: {
    color: theme.palette.grey[300],
    marginRight: theme.spacing(3.5),
    paddingTop: theme.spacing(0.2),
    paddingRight: theme.spacing(0.2),
  },

  verticalLine: {
    borderLeft: `2px solid ${theme.palette.grey[100]}`,
    minHeight: "64px",
    maxHeight: "100%",
    marginRight: theme.spacing(5),
    marginLeft: theme.spacing(5),
  },

  userInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  userDetail: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },

  arrowDown: {
    cursor: "pointer",
  },

}));
