import { useState, React } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import back_icon from '../Images/backicon.svg';
import OtpInput from "react-otp-input";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import { loginPageStyles } from "../Screens/LoginStyles";

export const LoginVerificationScreen = () => {
  const classes = loginPageStyles();
  let navigate = useNavigate();
  const back_to_main = () => { navigate('/login'); };
  const [code, setCode] = useState("");
  const handleChange = (code) => setCode(code);
  const theme = createTheme({ typography: { fontFamily: ['Mukta'].join(',') } });
  const titleStyle = { fontSize: '25px', lineHeight: '41.55px', fontWeight: '700', color: '#000000' };
  const buttonStyle = { textTransform: 'capitalize', fontSize: '19px', color: '#FFFFFF', fontWeight: '700', lineHeight: '25px' };
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' height='100%'>
      <Box sx={{ maxWidth: '375px', width: '100%' }}>
        <Grid onClick={back_to_main} container direction='row' justifyContent='flex-start' width='100%'>
          <Box sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'flex-start', alignContent: 'flex-start', fontWeight: '400', fontSize: '13px', lineHeight: '16px', color: '#000000' }}>
            <img src={back_icon} alt='' /> </Box>
          <Box sx={{ cursor: 'pointer', marginTop: '3px', fontWeight: '400', fontSize: '13px', lineHeight: '16px', color: '#000000' }}>Back</Box>
        </Grid>
        <Box sx={{ px: '10px' }}>
          <ThemeProvider theme={theme}> <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', marginTop: '178px', marginBottom: '16px' }}> <Typography style={titleStyle}> Verification</Typography></Box> </ThemeProvider>
          <Box className={classes.heading} sx={{ width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'center', fontWeight: '400', fontSize: '15px', lineHeight: '18.83px', color: '#111111' }}>
            Enter the verification code we just to your phone number </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '18px', marginTop: '66px' }}>
            <OtpInput value={code} onChange={handleChange} numInputs={6}
              separator={<span style={{ width: "21px", display: 'flex', justifyContent: 'center', alignContent: 'center', textAlign: 'center' }}></span>}
              isInputNum={true} shouldAutoFocus={true} inputStyle={{ border: 'none', borderBottom: '1px solid #054E8B', display: 'flex', justifyContent: 'space-between', alignContent: 'center', textAlign: 'center', width: "29px", fontSize: "12px", color: "#000", fontWeight: "400", caretColor: "blue" }}
              focusStyle={{ border: 'none', borderBottom: '1px solid #054E8B', outline: "none", display: 'flex', justifyContent: 'center', alignContent: 'center', textAlign: 'center' }} />
          </Box>
          <Box className={classes.heading} sx={{ textAlign: 'center', marginBottom: '14px', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '13px', color: '#455066', lineHeight: '16px' }}>
            If you did't receive a code. <Box sx={{ alignContent: 'center', textAlign: 'center', marginBottom: '14px', display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: '13px', color: '#054E8B', lineHeight: '16px' }}><span>Resend</span></Box>
          </Box>
          <Box sx={{ marginTop: '15px', display: 'flex', justifyContent: 'center' }}>
            <Button disableRipple variant='text' sx={{ maxWidth: '240px', width: '100%', borderRadius: '8px', background: '#054E8B', bgcolor: '#054E8B', color: '#ffffff', ':hover': { bgcolor: '#054E8B', color: '#ffffff' } }}>
              <ThemeProvider theme={theme}> <Typography style={buttonStyle}> Verify</Typography> </ThemeProvider>
            </Button>
          </Box>
          <Box sx={{ marginTop: '250px', marginBottom: '22px', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '13px', color: '#2A3752', lineHeight: '16px' }}>Version X.X</Box>
        </Box>
      </Box>
    </Grid>
  )
}
export default LoginVerificationScreen