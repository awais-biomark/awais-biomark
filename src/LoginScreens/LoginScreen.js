import React, { Fragment, useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { Box, Button, InputAdornment, TextField, } from "@mui/material";
import biomark_text from '../Images/biomark_text.svg';
import biomark_logo from '../Images/biomark_logo.svg';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { links } from "navigation/config";
import { Link } from "react-router-dom";
// import { loginPageStyles } from "../modules/Login/LoginStyles";
import { loginAction } from "../store/actions/login/loginAction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogisticsSignaturePopUp from "../LogisticsModule/LogisticsSignaturePopUp";
import LogisticsCancelSamplePopup from "../LogisticsModule/LogisticsCancelSamplePopup";
import ConfirmSamplesPopup from "../LogisticsModule/ConfirmSamplesPopup";
import MaxAttemptPopupForLogin from "./MaxAttemptPopupForLogin";
import InvalidAccountPopupForLogin from "./InvalidAccountPopupForLogin";
import PriceModal from "./PriceModal";
import Logistics from "../LogisticsModule/Logistics";
import Toasting from "./Toasting";
import { loginPageStyles } from "./LoginStyles";
import { alignProperty } from "@mui/material/styles/cssUtils";
import PopipForBlockedAccount from "./PopupForBlockedAccount";
const LoginScreen = () => {
  const classes = loginPageStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);

  const [isopen, isopened] = useState(false);

  const { rider, loading, errorMessage } = useSelector(
    (state) => state.loginReducer
  );
  const navigate = useNavigate();

  const [toggleShowPassword, setToggleShowPassword] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    userName: null,
    password: null,
  });
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "BioMark | Login";
  }, []);

  const handleClickShowPassword = () => {
    dispatch({ type: "RESET_ERROR_LOGOUT" });
    setToggleShowPassword(!toggleShowPassword);
  };
  const buttonStyle = { textTransform: 'capitalize', fontSize: '17px', color: '#FFFFFF', fontWeight: '700', lineHeight: '22px' };
  const titleStyle = { fontSize: '21px', lineHeight: '27px', fontWeight: '700', color: '#2A3752' };
  const nameStyle = { mt: '0px', mb: '0.25rem', display: 'flex', justifyContent: 'start', fontWeight: '400', fontSize: '13px', color: '#455066', lineHeight: '16px' }
  const getUser = localStorage.getItem("rider");
  useEffect(() => {
    if (rider && Object.keys(rider).length !== 0 && rider !== undefined) {
    }
  }, [getUser, rider, navigate, loading]);

  const loginHandler = () => {

    if ((loginInfo.userName == null && loginInfo.password == null) || (loginInfo.userName === "" && loginInfo.password === "")) {
      setLoginInfo({ userName: "", password: "" });
      setError("Please Enter Email Address and Password.");
      console.log('Please Enter Email Address and Password from console');

    } else if (loginInfo.password === "" || loginInfo.password == null) {
      setLoginInfo({ userName: loginInfo.userName, password: "" });

      alert(loginInfo.userName);
      console.log('Please Enter Password from console');

    } else if (loginInfo.userName === "" || loginInfo.userName == null) {
      setLoginInfo({ userName: "", password: loginInfo.password });
      setError("Please Enter Email Address.");

      console.log('Please Enter Email Address from console');
    }
    if ((!!loginInfo.userName && !!loginInfo.password)) {
      dispatch(loginAction(loginInfo.userName, loginInfo.password, setError))
        .catch((err) => {
          setError(err.message);
          if (err.message === "Error: Invalid Email or password.") {
            setOpen(true);
          }
          else if (err.message === "Error: Your account is locked.") {
            setOpens(true);
          }
          else {
          }
        });
    }
  };
  const [reponseError, setReponseError] = useState(false);
  const onChangeHandler = (e) => {
    dispatch({ type: "RESET_ERROR_LOGOUT" });
    setLoginInfo({ ...loginInfo, userName: e.target.value });
  };

  const onPasswordChangeHandler = (e) => {
    dispatch({ type: "RESET_ERROR_LOGOUT" });
    setLoginInfo({ ...loginInfo, password: e.target.value });
  };
  const [check, checked] = useState(false);

  return (
    <div>
      <Grid container direction='row' justifyContent='center' alignItems='center' width='100%' height='100%'>
        <Box sx={{ width: '100%', backgroundColor: '#ffffff', height: '100%' }}>
          {/* <Toasting /> */}
          <Box sx={{ mt: '8.75rem', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ mb: '1rem', alignItems: 'center', justifyContent: 'center', display: 'flex' }}> <img src={biomark_logo} alt='' /> </Box>
          </Box>
          <Box sx={{ mb: '0.625rem', textAlign: 'center', display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: '21px', color: '#2A3752', lineHeight: '27px' }}>
            <Box sx={{ ml: '0.4375rem', color: '#CCF1FF', borderRadius: '3px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}> <img src={biomark_text} alt='' /> </Box>
          </Box>
          <Grid container justifyContent="center">
            <Box sx={{ paddingBottom: '23px', maxWidth: '214px', width: '100%', display: 'flex', justifyContent: 'center', }}>
              <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                <Box style={titleStyle}> Lab Dispatch App</Box> </Box>
            </Box>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ maxWidth: '320px', width: '100%' }}>
              <TextField
                error={loginInfo?.userName === "" ? true : false}
                autoComplete="off"
                helperText={
                  loginInfo?.userName != null && loginInfo?.userName === ""
                    ? "username required"
                    : " "
                }
                label="UserName"
                type="text"
                value={loginInfo.userName}
                className={classes.textFiled}
                name="userName"
                onChange={(e) => onChangeHandler(e)}
              />
              <Box sx={{ mb: '1.25rem' }}></Box>
              <Box sx={{ mb: '7px' }}></Box>
              <TextField
                error={loginInfo?.password === "" ? true : false}
                autoComplete="off"
                helperText={
                  loginInfo?.password != null && loginInfo?.password === ""
                    ? "password required"
                    : " "}
                label="Password"
                type="password"
                value={loginInfo.password}
                className={classes.textFiled}
                name="password"
                onChange={(e) => onPasswordChangeHandler(e)}
              />
            </Box>
          </Box>
          <Box sx={{ mt: '1.25rem', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '13px', color: '#054E8B', lineHeight: '16px' }}> Forgot password? </Box>
          <Box sx={{ mt: '1.25rem', display: 'flex', justifyContent: 'center' }}> <Button onClick={() => loginHandler()} disableRipple variant='text' sx={{ py: '11px', fontFamily: 'Mukta', maxWidth: '320px', width: '100%', maxHeight: '40px', height: '100%', borderRadius: '8px', background: '#054E8B', bgcolor: '#054E8B', color: '#ffffff', ':hover': { bgcolor: '#054E8B', color: '#ffffff' } }}>
            <Box style={buttonStyle}> Login</Box>  </Button> </Box>
          <Box sx={{ mt: '20px' }}></Box>
          {open && <MaxAttemptPopupForLogin setOpen={setOpen} />}
          {opens && <PopipForBlockedAccount setOpens={setOpens} />}
          <Box sx={{ mt: '50px' }}></Box>
          <Box sx={{ fontFamily: 'Sans', mt: '7.625rem', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '13px', color: '#8493AE', lineHeight: '16px' }}> Version X.X </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default LoginScreen;