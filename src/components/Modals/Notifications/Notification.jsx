import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import QrCodeIcon from "@mui/icons-material/QrCode";
import { useNavigate } from "react-router-dom";

const styles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
    zIndex: 9999,
  },
  notifiactionBox: {
    backgroundColor: theme.palette.white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    boxShadow: "0px 10px 40px -20px rgba(56, 73, 107, 0.2)",
    borderRadius: "8px",
    padding: `${theme.spacing(3)} ${theme.spacing(5)}`,
  },
  notificationSubBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  notifiactionLogoBox: {
    borderRadius: "50%",
    background: "linear-gradient(90deg, #00A79D 0%, #2BB673 100%)",
    height: "50px",
    width: "50px",
    marginBottom: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  notifiactionHeading: {
    fontSize: "24px !important",
    fontWeight: "700 !important",
    color: theme.palette.textHeadingColor,
  },
  notifiactionText: {
    fontSize: "15px !important",
    color: theme.palette.textGrey,
    textAlign: "center",
    paddingLeft: `${theme.spacing(2)} !important`,
    paddingRight: `${theme.spacing(2)} !important`,
  },
  notifiactionTextClose: {
    fontSize: "16px !important",
    fontWeight: "600 !important",
    color: theme.palette.textGrey,
    borderBottom: `2px solid ${theme.palette.textHeadingColor}`,
    cursor: "pointer",
    marginTop: `${theme.spacing(1)} !important`,
  },
  notifiactionLogo: {
    fontSize: "32px !important",
    color: theme.palette.white,
  },
}));

const Notification = ({
  closeModal,
  closeParentModal,
  heading,
  text,
  icons,
  link,
}) => {
  const classes = styles();
  const navigate = useNavigate();

  const modalCloseHandler = () => {
    closeModal(false);
    navigate(link);
    if (closeParentModal) {
      closeParentModal(false);
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.notifiactionBox}>
        <Box className={classes.notificationSubBox}>
          <Box className={classes.notifiactionLogoBox}>
            {icons === "success" ? (
              <DoneIcon className={classes.notifiactionLogo} />
            ) : (
              <QrCodeIcon className={classes.notifiactionLogo} />
            )}
          </Box>
          {heading !== "" && (
            <Typography className={classes.notifiactionHeading}>
              {heading}
            </Typography>
          )}

          {text !== "" && (
            <Typography className={classes.notifiactionText}>{text}</Typography>
          )}
        </Box>
        <Typography
          className={classes.notifiactionTextClose}
          onClick={modalCloseHandler}
        >
          Close
        </Typography>
      </Box>
    </Box>
  );
};

export default Notification;
