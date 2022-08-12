import React, { useState } from "react";
import { Notifications, Search } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import logo from "assets/logo.svg";
// import logoName from "../../assets/logoName.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Tooltip } from "@material-ui/core";
import AccountMenu from "components/Header/AccountMenu";
import { headerStyle } from "components/Header/HeaderStyle";
import { useSelector } from "react-redux";

const NavBar = (props) => {
  const { getUser, setLoader } = props;
  const userObj = JSON.parse(getUser);

  const classes = headerStyle();
  const [accountsMenuDropDown, setAccountsMenuDropDown] = useState(null);
  const open = Boolean(accountsMenuDropDown);
  const { user } = useSelector((state) => state.loginReducer);
  const handleClick = (event) => {
    setAccountsMenuDropDown(event.currentTarget);
  };

  return (
    <div>
      {user && Object.keys(user).length !== 0 && user !== undefined && (
        <div>
          <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
              <div className={classes.navBarHandle}>
                <div className={classes.logo}>
                  <img src={logo} alt="" className={classes.logoImage} />
                </div>
                <div className={classes.search}>
                  <TextField
                    className={classes.searchField}
                    placeholder="Search"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <div className={classes.verticalLine}></div>
                </div>
              </div>

              <div className={classes.icons}>
                <Badge
                  badgeContent={2}
                  color="secondary"
                  className={classes.badge}
                >
                  <Notifications color="grey" />
                </Badge>

                <div className={classes.userInfo}>
                  <Avatar />
                  <div className={classes.userDetail}>
                    <Typography variant="h6" style={{ marginTop: "5px" }}>
                      {userObj && userObj?.username}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{ marginTop: "-10px" }}
                    >
                      {userObj && userObj?.email}
                    </Typography>
                  </div>
                  <Tooltip title="Account settings">
                    <KeyboardArrowDownIcon
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      className={classes.arrowDown}
                    />
                  </Tooltip>
                </div>
              </div>
            </Toolbar>
          </AppBar>
          <AccountMenu
            setAccountsMenuDropDown={setAccountsMenuDropDown}
            accountsMenuDropDown={accountsMenuDropDown}
            open={open}
            setLoader={setLoader}
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
