import React from "react";
import UseTabs from "components/Tabs/UseTabs";
import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "80vh",
    borderRadius: "10px",
    backgroundColor: theme.palette.white,
    position: "relative",
    zIndex: "2",
  },
}));

const AllFeedsChild = (props) => {
  const classes = styles();

  const {tabs, requestType} = props;

  return (
    <>
      <UseTabs tabs={tabs} requestType={requestType} />
      <div className={classes.root}>{props.children}</div>
    </>
  );
};

export default AllFeedsChild;
