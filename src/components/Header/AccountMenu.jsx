import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logoutAction } from "store/actions/login/logoutAction";
import { useNavigate } from "react-router-dom";
import { links } from "navigation/config";

const AccountMenu = (props) => {
  const { setAccountsMenuDropDown, accountsMenuDropDown, open, setLoader } =
    props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    setAccountsMenuDropDown(null);
  };

  const handleLogout = () => {
    setLoader(true);
    dispatch(logoutAction(setLoader, navigate));
  };
  return (
    <Menu
      anchorEl={accountsMenuDropDown}
      id="account-menu"
      open={open}
      onClose={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem onClick={() => navigate(links.settings)}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Log out
      </MenuItem>
    </Menu>
  );
};

export default AccountMenu;
