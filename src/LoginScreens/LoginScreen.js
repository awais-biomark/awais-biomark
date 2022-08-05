import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import biomark_text from '../Images/biomark_text.svg';
import biomark_logo from '../Images/biomark_logo.svg';
import { Button } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { loginPageStyles } from "../LoginScreens/LoginStyles";

const LoginScreen = () => {
  let navigate = useNavigate();
  const forgot_screen = () => { navigate('/forgot_password'); };
  const logistics_screen = () => { navigate('/logistics'); };
  const titleStyle = { fontSize: '21px', lineHeight: '27px', fontWeight: '700', color: '#2A3752' };
  const buttonStyle = { textTransform: 'capitalize', fontSize: '17px', color: '#FFFFFF', fontWeight: '700', lineHeight: '22px' };
  const classes = loginPageStyles();
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' width='100%' height='100%'>
      <Box sx={{ width: '100%', backgroundColor: '#ffffff', height: '100%' }}>
        <Box sx={{ mt: '8.75rem', display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ mb: '1rem', alignItems: 'center', justifyContent: 'center', display: 'flex' }}> <img src={biomark_logo} alt='' /> </Box>
        </Box>
        <Box sx={{ mb: '0.625rem', textAlign: 'center', display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: '21px', color: '#2A3752', lineHeight: '27px' }}>
          <Box sx={{ ml: '0.4375rem', color: '#CCF1FF', borderRadius: '3px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}> <img src={biomark_text} alt='' /> </Box>
        </Box>
        <Grid container justifyContent="center">
          <Box sx={{ paddingBottom: '23px', maxWidth: '214px', width: '100%', display: 'flex', justifyContent: 'center', }}>
            <Box className={classes.heading} sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
              <Box className={classes.heading10} style={titleStyle}> Lab Dispatch App</Box> </Box>
          </Box>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ maxWidth: '320px', width: '100%' }}>
            <Box className={classes.heading} sx={{ mt: '0px', mb: '0.25rem', display: 'flex', justifyContent: 'start', fontWeight: '400', fontSize: '13px', color: '#455066', lineHeight: '16px' }}>Username</Box>
            <Box sx={{ display: "flex", border: 1, borderRadius: '4px', px: '8px', py: '6px', borderColor: '#DAE0EB' }}> <TextField variant="standard" placeholder='Placeholder' sx={{ '& .MuiInputBase-input': { fontFamily: 'Sans', fontWeight: '400', fontSize: '16px', lineHeight: '21px' }, display: 'flex', width: '100%' }} InputProps={{ disableUnderline: true }} /> </Box>
            <Box className={classes.heading} sx={{ mt: '1.25rem', mb: '0.25rem', display: 'flex', justifyContent: 'start', fontWeight: '400', fontSize: '13px', color: '#455066', lineHeight: '16px' }}>Password</Box>
            <Box sx={{ display: "flex", border: 1, borderRadius: '4px', px: '8px', py: '6px', borderColor: '#DAE0EB' }}><Box></Box> <TextField variant="standard" placeholder='Placeholder' sx={{ '& .MuiInputBase-input': { fontFamily: 'Sans', fontWeight: '400', fontSize: '16px', lineHeight: '21px' }, display: 'flex', width: { xs: 350, md: 360 } }} InputProps={{ disableUnderline: true }} />
              <VisibilityOffIcon sx={{ color: "#8493AE", display: 'flex', justifyContent: 'flex-end', paddingBottom: '5px', paddingTop: '5px', paddingLeft: '8px', borderColor: '#DADADA', paddingRight: '0px' }} /> </Box>
          </Box>
        </Box>
        <Box className={classes.heading} onClick={forgot_screen} sx={{ mt: '1.25rem', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '13px', color: '#054E8B', lineHeight: '16px' }}> Forgot password? </Box>
        <Box sx={{ mt: '1.25rem', display: 'flex', justifyContent: 'center' }}> <Button onClick={logistics_screen} disableRipple variant='text' sx={{ py: '11px', fontFamily: 'Mukta', maxWidth: '320px', width: '100%', maxHeight: '40px', height: '100%', borderRadius: '8px', background: '#054E8B', bgcolor: '#054E8B', color: '#ffffff', ':hover': { bgcolor: '#054E8B', color: '#ffffff' } }}>
          <Box style={buttonStyle}> Login</Box>  </Button> </Box>
        <Box sx={{ fontFamily: 'Sans', mt: '7.625rem', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '13px', color: '#8493AE', lineHeight: '16px' }}> Version X.X </Box>
      </Box>
    </Grid>
  );
}
export default LoginScreen