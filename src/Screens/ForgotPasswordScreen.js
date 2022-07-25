import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import back_icon from '../Images/backicon.svg';
import { Typography } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';

export const ForgotPasswordScreen = () => {
  let navigate = useNavigate();
  const change_password = () => { navigate('/change_password'); };
  const back_to_main = () => { navigate('/login'); };
  const theme = createTheme({ typography: { fontFamily: ['Mukta', 'sans-serif'].join(',') } });
  const titleStyle = { fontSize: '25px', lineHeight: '41.55px', fontWeight: '700', color: '#000000' };
  const buttonStyle = { backgroundColor: '#054E8B', textTransform: 'capitalize', fontSize: '19px', color: 'FFFFFF', fontWeight: '700', lineHeight: '25px' };
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' height='100%'>
      <Box sx={{ maxWidth: '375px', width: '100%' }}>
        <Grid onClick={back_to_main} container direction='row' justifyContent='flex-start' >
          <Box sx={{ cursor: 'pointer', fontWeight: '400', fontSize: '13px', lineHeight: '16px', color: '#000000' }}><img src={back_icon} alt='' /> </Box>
          <Box sx={{ cursor: 'pointer', marginTop: '3px', fontWeight: '400', fontSize: '13px', lineHeight: '16px', color: '#000000' }}>Back</Box>
        </Grid>
        <Box sx={{ px: '20px' }}>
          <ThemeProvider theme={theme}> <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', marginTop: '178px', marginBottom: '19px' }}>
            <Typography style={titleStyle}>  Forgot Password?</Typography> </Box> </ThemeProvider>
          <Box sx={{ textAlign: 'center', marginBottom: '39px', fontWeight: '400', fontSize: '15px', lineHeight: '19px', color: '#111111' }}>Enter your phone number and we will send you an OTP to reset your password.</Box>
          <Box sx={{ marginBottom: '4px', display: 'flex', justifyContent: 'start', fontWeight: '400', fontSize: '13px', color: '#455066', lineHeight: '16px', maxWidth: '300px' }}>Phone Number</Box>
          <Box sx={{ marginBottom: '75px', display: "flex", border: 1, borderRadius: '4px', px: '8px', py: '6px', borderColor: '#DAE0EB' }}  >
            <TextField variant="standard" placeholder='Placeholder' sx={{ display: 'flex', width: '270px' }} InputProps={{ disableUnderline: true }} /> </Box>
          <Box sx={{ marginTop: '49px', display: 'flex', justifyContent: 'center' }}>
            <Button onClick={change_password} disableRipple variant='text' sx={{ maxWidth: '240px', width: '100%', borderRadius: '8px', background: '#054E8B', bgcolor: '#054E8B', color: '#ffffff', ':hover': { bgcolor: '#054E8B', color: '#ffffff' } }}>
              <ThemeProvider theme={theme}> <Typography style={buttonStyle}> Send OTP</Typography> </ThemeProvider>
            </Button>
          </Box>
          <Box sx={{ marginTop: '191px', marginBottom: '40px', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '13px', color: '#2A3752', lineHeight: '16px' }}>Version X.X</Box>
        </Box>
      </Box>
    </Grid>
  )
}
export default ForgotPasswordScreen