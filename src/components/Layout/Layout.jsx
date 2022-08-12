import { Grid } from "@mui/material";
import React from "react";
import Header from "components/Header/Header";
import SideBar from "components/Sidebar/SideBar";
import AllFeeds from "components/Feeds/AllFeeds";
import "styles/loaderStyle.css";
import { useSelector } from "react-redux";

const Layout = () => {
  const { user } = useSelector((state) => state.loginReducer);

  return (
    <div>
      <Header user={user} />
      <Grid container>
        <Grid item md={1.5} sm={4} xs={6}>
          <SideBar />
        </Grid>
        <Grid item md={10.5} sm={8} xs={6}>
          <AllFeeds />
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
