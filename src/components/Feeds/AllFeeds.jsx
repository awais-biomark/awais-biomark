import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AppRoutes from "navigation/Routes";

const style = makeStyles((theme) => ({
  feeds: {
    width: "100%",
    minHeight: "100vh",
    height: "100%",
    backgroundColor: theme.palette.bgColor,
    display: "flex",
    justifyContent: "center",
  },
  box: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(2),
    minHeight: "80vh",
    width: "97%",
    borderRadius: "10px !important",
  },
}));

const AllFeeds = () => {
  const classes = style();
  return (
    <div className={classes.feeds}>
      <Box className={classes.box}>
        <AppRoutes />
      </Box>
    </div>
  );
};

export default AllFeeds;
