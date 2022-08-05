import { useState, React } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import backbutton from '../Images/backbutton.svg';
import OtpInput from "react-otp-input";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import { loginPageStyles } from "./LoginStyles";

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
    <Grid container direction='row' justifyContent='center' alignItems='center' width='100%' >
      <Box sx={{ width: '100%' }}>
        <Grid onClick={back_to_main} container direction='row' justifyContent='flex-start' >
          <Box sx={{ mr: '0.1875rem', cursor: 'pointer', display: 'flex', justifyContent: 'flex-start', alignContent: 'flex-start', fontWeight: '400', fontSize: '13px', lineHeight: '16px', color: '#000000' }}>
            <img src={backbutton} alt='' style={{ width: '24px' }} /> </Box>
          <Box sx={{ fontFamily: 'Mulish', fontStyle: 'normal', cursor: 'pointer', mt: '0.1875rem', fontWeight: '400', fontSize: '15px', lineHeight: '19px', color: '#111111' }}>Back</Box>  </Grid>
        <Box sx={{ px: '10px', width: '100%' }}>
          <ThemeProvider theme={theme}> <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', mt: '14.375rem', mb: '1rem' }}> <Typography style={titleStyle}> Verification</Typography></Box> </ThemeProvider>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box className={classes.heading} sx={{ maxWidth: '320px', width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'center', fontWeight: '400', fontSize: '14px', fontFamily: 'Sans', lineHeight: '18.83px', color: '#111111' }}>
              Enter the verification code we just to your phone number </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: '1.1875rem', mt: '2.5rem' }}>
            <OtpInput value={code} onChange={handleChange} numInputs={6}
              separator={<span style={{ width: "21px", display: 'flex', justifyContent: 'center', alignContent: 'center', textAlign: 'center' }}></span>}
              isInputNum={true} shouldAutoFocus={true} inputStyle={{ border: 'none', borderBottom: '1px solid #054E8B', display: 'flex', justifyContent: 'space-between', alignContent: 'center', textAlign: 'center', width: "29px", fontSize: "12px", color: "#000", fontWeight: "400", caretColor: "blue" }}
              focusStyle={{ border: 'none', borderBottom: '1px solid #054E8B', outline: "none", display: 'flex', justifyContent: 'center', alignContent: 'center', textAlign: 'center' }} />
          </Box>
          <Box className={classes.heading} sx={{ fontFamily: 'Sans', textAlign: 'center', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '12px', color: '#111111', lineHeight: '16px' }}>
            If you did't receive a code. <Box sx={{ fontFamily: 'Sans', alignContent: 'center', textAlign: 'center', mb: '1.1875rem', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '12px', color: '#054E8B', lineHeight: '16px' }}><span>Resend</span></Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button disableRipple variant='text' sx={{ maxWidth: '240px', width: '100%', borderRadius: '8px', background: '#054E8B', bgcolor: '#054E8B', color: '#ffffff', ':hover': { bgcolor: '#054E8B', color: '#ffffff' } }}>
              <ThemeProvider theme={theme}> <Typography style={buttonStyle}> Verify</Typography> </ThemeProvider>
            </Button>
          </Box>
          <Box sx={{ fontFamily: 'Sans', mt: '10.625rem', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '13px', color: '#2A3752', lineHeight: '16px' }}>Version X.X</Box>
        </Box>
      </Box>
    </Grid>
  )
}
export default LoginVerificationScreen