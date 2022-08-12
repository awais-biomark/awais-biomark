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
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const LoginScreen = () => {
  const classes = loginPageStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

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
      // if (!loading) {
      //   window.location.replace("/");
      // }
    }
  }, [getUser, rider, navigate, loading]);

  const loginHandler = () => {
    // dispatch({ type: "RESET_ERROR_LOGOUT" });

    if ((loginInfo.userName == null && loginInfo.password == null) || (loginInfo.userName === "" && loginInfo.password === "")) {
      setLoginInfo({ userName: "", password: "" });
      setError("Please Enter Email Address and Password.");
      // setOpen(false);
      console.log('Please Enter Email Address and Password from console');

    } else if (loginInfo.password === "" || loginInfo.password == null) {
      setLoginInfo({ userName: loginInfo.userName, password: "" });
      setError("Please Enter Password.");
      alert('enter ja')
      alert(loginInfo.userName);
      console.log('Please Enter Password from console');

    } else if (loginInfo.userName === "" || loginInfo.userName == null) {
      setLoginInfo({ userName: "", password: loginInfo.password });
      setError("Please Enter Email Address.");

      console.log('Please Enter Email Address from console');
    }
    if ((!!loginInfo.userName && !!loginInfo.password)) {
      // setOpen(false);
      dispatch(loginAction(loginInfo.userName, loginInfo.password, setError, setOpen, setReponseError));
      // console.log('login email' + loginInfo.userName)
      // setOpen(false);

    }
    // else if{
    //   setOpen(true);
    // }
    // if ((!loginInfo.userName && !loginInfo.password) || (!loginInfo.userName == null && !loginInfo.password == null) || (!loginInfo.userName === "" && !loginInfo.password === "")) {
    //   setOpen(true);
    //   // dispatch(loginAction(loginInfo.userName, loginInfo.password, setError));
    //   console.log('login email no true ' + loginInfo.userName)
    //   setOpen(true);

    // }

  };
  const [reponseError, setReponseError] = useState(false);
  const onChangeHandler = (e) => {
    // console.log("username:  " + e.target.value)
    // console.log("User name :" + e.target.name);
    dispatch({ type: "RESET_ERROR_LOGOUT" });
    setLoginInfo({ ...loginInfo, userName: e.target.value });
    // console.log('username' + e.target.name);
  };

  const onPasswordChangeHandler = (e) => {
    // console.log("username:  " + e.target.value)
    dispatch({ type: "RESET_ERROR_LOGOUT" });
    setLoginInfo({ ...loginInfo, password: e.target.value });
  };
  const [check, checked] = useState(false);
  // const handleUserOnBlur = () => {
  //   if (loginInfo?.userName != null && loginInfo?.userName !== "" ? "Please enter Password" : " ") {
  //     check(true);
  //   }
  // }

  // useEffect(() => error !== "" && (error), [error]);
  // useEffect(() => errorMessage !== "" && (errorMessage), [errorMessage]);

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
          {/* <ToastContainer /> */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ maxWidth: '320px', width: '100%' }}>
              {/* <Box style={nameStyle} sx={{ mb: '7px' }} >Username</Box> */}
              {/* <TextField
                error={loginInfo?.userName === "" ? true : false}
                autoComplete="off"
                helperText={

                  loginInfo?.userName != null && loginInfo?.userName === ""
                    ? "Username is Required"
                    : " "
                }
                onBlur={handleUserOnBlur}
                label="Username"
                type="text"
                value={loginInfo.userName}
                className={classes.textFiled}
                name="userName"
                onChange={(e) => onChangeHandler(e)}
              /> */}

              <TextField
                // error={loginInfo?.userName !== "biomarks@gmail.com" ? true : false}
                autoComplete="off"
                helperText={
                  // ((loginInfo?.password != null && loginInfo?.password !== "abcd1234@") ? "Invalid password" : " ")
                  (reponseError ? 'Invalid Username Entered' : (loginInfo?.userName != null && loginInfo?.userName === "") ? "Username is Empty" : " ")
                }
                // onBlur={handleUserOnBlur}
                label="Username"
                type="Username"
                value={loginInfo.userName}
                className={classes.textFiled}
                name="Username"
                onChange={(e) => onChangeHandler(e)}
              />
              <Box sx={{ mb: '1.25rem' }}></Box>

              {/* <Box sx={{ mt: '1.25rem', mb: '0.25rem', display: 'flex', justifyContent: 'start', fontWeight: '400', fontSize: '13px', color: '#455066', lineHeight: '16px' }}>Password</Box> */}
              <Box sx={{ mb: '7px' }}></Box>


              <TextField
                error={loginInfo?.password !== "abcd1234@" ? true : false}
                autoComplete="off"
                helperText={
                  // ((loginInfo?.password != null && loginInfo?.password !== "abcd1234@") ? "Invalid password" : " ")
                  (reponseError ? 'Invalid Password Entered' : (loginInfo?.password != null && loginInfo?.password === "") ? "Password is Empty" : " ")
                }
                // onBlur={handleUserOnBlur}
                label="Password"
                type="password"
                value={loginInfo.password}
                className={classes.textFiled}
                name="Password"
                onChange={(e) => onPasswordChangeHandler(e)}
              />

              {/* <Box style={nameStyle} >Username</Box> */}
              {/* <Box sx={{ display: "flex", border: 1, borderRadius: '4px', px: '8px', py: '6px', borderColor: '#DAE0EB' }}>
                <TextField
                  onChange={(e) => onChangeHandler(e)} variant="standard" placeholder='Placeholder' sx={{
                    '&.MuiInputBase-root-MuiOutlinedInput-root.Mui-error ': { borderColor: 'black' },
                    '& .MuiInputBase-input': { borderColor: '#DAE0EB', fontFamily: 'Sans', fontWeight: '400', fontSize: '16px', lineHeight: '21px' }, display: 'flex', width: '100%'
                  }} InputProps={{ disableUnderline: true }} /> </Box> */}
              {/* <Box sx={{ mt: '1.25rem', mb: '0.25rem', display: 'flex', justifyContent: 'start', fontWeight: '400', fontSize: '13px', color: '#455066', lineHeight: '16px' }}>Password</Box>
            */}
              {/* <Box sx={{ display: "flex", border: 1, borderRadius: '4px', px: '8px', py: '6px', borderColor: '#DAE0EB' }}><Box></Box> <TextField
                InputProps={{
                  disableUnderline: true, endAdornment: (
                    <InputAdornment position="end" onClick={handleClickShowPassword} style={{ cursor: "pointer" }}>
                      {toggleShowPassword ? <Visibility /> : <VisibilityOff />}
                    </InputAdornment>),
                }} onChange={(e) => onPasswordChangeHandler(e)} variant="standard" placeholder='Placeholder' sx={{ '& .MuiInputBase-input': { fontFamily: 'Sans', fontWeight: '400', fontSize: '16px', lineHeight: '21px' }, display: 'flex', width: { xs: 350, md: 360 } }} />
              </Box> */}
            </Box>
          </Box>
          <Box sx={{ mt: '1.25rem', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '13px', color: '#054E8B', lineHeight: '16px' }}> Forgot password? </Box>
          <Box sx={{ mt: '1.25rem', display: 'flex', justifyContent: 'center' }}> <Button onClick={() => loginHandler()} disableRipple variant='text' sx={{ py: '11px', fontFamily: 'Mukta', maxWidth: '320px', width: '100%', maxHeight: '40px', height: '100%', borderRadius: '8px', background: '#054E8B', bgcolor: '#054E8B', color: '#ffffff', ':hover': { bgcolor: '#054E8B', color: '#ffffff' } }}>
            <Box style={buttonStyle}> Login</Box>  </Button> </Box>
          <Box sx={{ mt: '20px' }}></Box>
          {/* {open ? window.location.replace("/logistics") : ''} */}
          {open && <MaxAttemptPopupForLogin setOpen={setOpen} />}
          <Box sx={{ mt: '50px' }}></Box>
          <Box sx={{ fontFamily: 'Sans', mt: '7.625rem', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '13px', color: '#8493AE', lineHeight: '16px' }}> Version X.X </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default LoginScreen;