import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import backbutton from '../Images/backbutton.svg';
import { useNavigate } from 'react-router-dom';
import { loginPageStyles } from "../LoginScreens/LoginStyles";

export const ForgotPasswordScreen = () => {
  let navigate = useNavigate();
  const classes = loginPageStyles();
  const change_password = () => { navigate('/change_password'); };
  const back_to_main = () => { navigate('/login'); };
  const titleStyle = { fontSize: '24px', lineHeight: '31px', fontWeight: '700', color: '#000000' };
  const buttonStyle = { backgroundColor: '#054E8B', textTransform: 'capitalize', fontSize: '19px', color: 'FFFFFF', fontWeight: '700', lineHeight: '25px' };
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Box sx={{ width: '100%' }}>
        <Grid onClick={back_to_main} container direction='row' justifyContent='flex-start' >
          <Box sx={{ mr: '0.1875rem', cursor: 'pointer', display: 'flex', justifyContent: 'flex-start', alignContent: 'flex-start', fontWeight: '400', fontSize: '13px', lineHeight: '16px', color: '#000000' }}>
            <img src={backbutton} alt='' style={{ width: '24px' }} /> </Box>
          <Box sx={{ fontFamily: 'Mulish', fontStyle: 'normal', cursor: 'pointer', mt: '0.1875rem', fontWeight: '400', fontSize: '15px', lineHeight: '19px', color: '#111111' }}>Back</Box>  </Grid>
        <Box sx={{ px: '20px' }}>
          <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', mt: '14.6875rem', mb: '0.625rem' }}>
            <Box className={classes.heading10} style={titleStyle}>  Forgot Password?</Box> </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ maxWidth: '320px', width: '100%' }}>
              <Box className={classes.heading} sx={{ textAlign: 'center', mb: '1.25rem', fontWeight: '400', fontSize: '14px', lineHeight: '19px', color: '#111111' }}>Enter your phone number and we will send you an OTP to reset your password.</Box>
              <Box className={classes.heading} sx={{ mb: '0.25rem', display: 'flex', justifyContent: 'start', fontWeight: '400', fontSize: '13px', color: '#455066', lineHeight: '16px', maxWidth: '300px' }}>Phone Number</Box>
              <Box sx={{ mb: '1.25rem', display: "flex", border: 1, borderRadius: '4px', px: '8px', py: '6px', borderColor: '#DAE0EB' }}  >
                <TextField variant="standard" placeholder='Placeholder' sx={{ '& .MuiInputBase-input': { fontFamily: 'Sans', fontWeight: '400', fontSize: '16px', lineHeight: '21px' }, display: 'flex', width: '100%' }} InputProps={{ disableUnderline: true }} /> </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={change_password} disableRipple variant='text' sx={{ fontFamily: 'Mukta', maxWidth: '240px', width: '100%', borderRadius: '8px', background: '#054E8B', bgcolor: '#054E8B', color: '#ffffff', ':hover': { bgcolor: '#054E8B', color: '#ffffff' } }}>
              <Box style={buttonStyle}> Send OTP</Box>
            </Button>
          </Box>
          <Box sx={{ fontFamily: 'Sans', mt: '11.8125rem', mb: '2.5rem', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '13px', color: '#2A3752', lineHeight: '16px' }}>Version X.X</Box>
        </Box>
      </Box>
    </Grid>
  )
}
export default ForgotPasswordScreen