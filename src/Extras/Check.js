import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import { accountsLabDeleteAction } from "store/actions/accounts/lab/accountsLabDeleteAction";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

const styles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
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
    fontSize: "70px !important",
  },
  btnContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignContent: "center",
    marginTop: theme.spacing(3),
  },
  btn: {
    color: `${theme.palette.white} !important`,
    backgroundColor: `${theme.palette.textHeadingColor} !important`,
    padding: `${theme.spacing(1)} ${theme.spacing(2)} !important`,
    fontWeight: "700 !important",
  },
}));

const Check = ({ closeModal, labId }) => {
  const classes = styles();
  const dispatch = useDispatch();

  const { loading, accountsLabDeleted } = useSelector(
    (state) => state.accountsLabDeleteReducer
  );

  const { accountsLabList } = useSelector(
    (state) => state.accountsLabListReducer
  );

  useEffect(() => {
    if (accountsLabDeleted) {
      const filterAccountsLabList = accountsLabList.filter(
        (l) => l.id !== labId
      );
      dispatch({ type: "ACCOUTNS_LABLIST_SUCCESS", filterAccountsLabList });
      dispatch({ type: "ACCOUTNS_LAB_DELETE_RESET" });
      closeModal({ open: false, id: null });
    }
  }, [accountsLabList, accountsLabDeleted, labId, closeModal, dispatch]);

  const labDeleteHandler = () => {
    if (labId !== null) {
      dispatch(accountsLabDeleteAction(labId));
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.notifiactionBox}>
        <Box className={classes.notificationSubBox}>
          <Box className={classes.notifiactionLogoBox}>
            <ErrorIcon color="warning" className={classes.notifiactionLogo} />
          </Box>

          <Typography className={classes.notifiactionHeading}>
            Are you sure you want to delete?
          </Typography>
        </Box>
        <Box className={classes.btnContainer}>
          <Button
            className={classes.btn}
            onClick={labDeleteHandler}
            endIcon={
              loading && (
                <CircularProgress size="20px" style={{ color: "#273859" }} />
              )
            }
          >
            Delete
          </Button>
          <Button
            className={classes.btn}
            onClick={() => closeModal({ open: false, id: null })}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Check;
