import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import biomark_text from '../Images/biomark_text.svg';
import biomark_logo from '../Images/biomark_logo.svg';
import { Button } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  let navigate = useNavigate();
  const forgot_screen = () => { navigate('/forgot_password'); };
  const theme = createTheme({ typography: { fontFamily: ['Mukta', 'sans-serif'].join(',') } });
  const titleStyle = { fontSize: '21px', lineHeight: '27px', fontWeight: '700', color: '#2A3752' };
  const buttonStyle = { textTransform: 'capitalize', fontSize: '19px', color: '#FFFFFF', fontWeight: '700', lineHeight: '25px' };
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' height='100%' px='20px'>
      <Box sx={{ maxWidth: '375px', width: '100%' }}>
        <Box sx={{ marginTop: '54px', display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ marginBottom: '16px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}> <img src={biomark_logo} alt='' /> </Box>
        </Box>
        <Box sx={{ marginBottom: '11px', textAlign: 'center', display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: '21px', color: '#2A3752', lineHeight: '27px' }}>
          <Box sx={{ marginLeft: '7px', color: '#CCF1FF', borderRadius: '3px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}> <img src={biomark_text} alt='' /> </Box>
        </Box>
        <Grid container justifyContent="center">
          <Box sx={{ paddingBottom: '19px', paddingLeft: '20px', paddingRight: '20px', maxWidth: '214px', width: '100%', display: 'flex', justifyContent: 'center', }}>
            <ThemeProvider theme={theme}> <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
              <Typography style={titleStyle}> Lab Dispatch App</Typography> </Box> </ThemeProvider>
          </Box>
        </Grid>
        <Box sx={{ marginTop: '25px', marginBottom: '4px', display: 'flex', justifyContent: 'start', fontWeight: '400', fontSize: '13px', color: '#455066', lineHeight: '16px', maxWidth: '300px' }}>Username</Box>
        <Box sx={{ display: "flex", border: 1, borderRadius: '4px', px: '8px', py: '6px', borderColor: '#DAE0EB' }}> <TextField variant="standard" placeholder='Placeholder' sx={{ display: 'flex', width: '270px' }} InputProps={{ disableUnderline: true }} /> </Box>
        <Box sx={{ marginTop: '12px', marginBottom: '4px', display: 'flex', justifyContent: 'start', fontWeight: '400', fontSize: '13px', color: '#455066', lineHeight: '16px', maxWidth: '300px' }}>Password</Box>
        <Box sx={{ display: "flex", border: 1, borderRadius: '4px', px: '8px', py: '6px', borderColor: '#DAE0EB' }}> <TextField variant="standard" placeholder='Placeholder' sx={{ display: 'flex', width: { xs: 350, md: 360 } }} InputProps={{ disableUnderline: true }} />
          <VisibilityOffIcon sx={{ color: "#8493AE", display: 'flex', justifyContent: 'flex-end', paddingBottom: '5px', paddingTop: '5px', paddingLeft: '8px', borderColor: '#DADADA', paddingRight: '7px' }} /> </Box>
        <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '13px', color: '#054E8B', lineHeight: '16px' }}> Forgot password? </Box>
        <Box sx={{ marginTop: '48px', display: 'flex', justifyContent: 'center' }}> <Button onClick={forgot_screen} disableRipple variant='text' sx={{ maxWidth: '320px', width: '100%', borderRadius: '8px', background: '#054E8B', bgcolor: '#054E8B', color: '#ffffff', ':hover': { bgcolor: '#054E8B', color: '#ffffff' } }}>
          <ThemeProvider theme={theme}> <Typography style={buttonStyle}> Login</Typography> </ThemeProvider> </Button> </Box>
        <Box sx={{ marginTop: '179px', marginBottom: '40px', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '13px', color: '#2A3752', lineHeight: '16px' }}> Version X.X </Box>
      </Box>
    </Grid>
  );
}
export default LoginScreen