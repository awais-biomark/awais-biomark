import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Typography } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import { loginPageStyles } from "./LoginStyles";
const border_button = { border: 2 };
const titleStyle = { fontSize: '19px', lineHeight: '25px', fontWeight: '700', color: '#054E8B' };
const descStyle = { fontSize: '15px', lineHeight: '19px', fontWeight: '400', color: '#2A3752' };
const theme = createTheme({ typography: { fontFamily: ['Mulish', 'sans-serif'].join(',') } });
const buttonStyle = { textTransform: 'none', fontSize: '15px', color: '#2A3752', fontWeight: '700', lineHeight: '20px' };
const ChangePasswordPopup = () => {
  const classes = loginPageStyles();
  let navigate = useNavigate();
  const login_screen = () => { navigate('/login') }
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Box sx={{ boxShadow: '3', paddingBottom: '12px', px: '12px', paddingTop: '20px', borderRadius: '8px', backgroundColor: '#FFFFFF', maxWidth: '351px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box> <CheckCircleIcon sx={{ color: '#054E8B', fontSize: 58 }} /></Box>
        <Box sx={{ textAlign: 'center', marginTop: '15px', marginBottom: '12px' }}>
          <Typography style={titleStyle} className={classes.heading10}>Password Changed!</Typography></Box>
        <ThemeProvider theme={theme}> <Box sx={{ textAlign: 'center', marginBottom: '20px', width: '100%' }}>
          <Typography style={descStyle}>Your password has been changed successfuly.</Typography></Box></ThemeProvider>
        <Button onClick={login_screen} disableRipple variant='text' sx={{ ...border_button, width: '100%', borderRadius: '8px', borderColor: '#1B96D8', bgcolor: '#ffffff', ':hover': { bgcolor: '#ffffff' } }}>
          <Typography style={buttonStyle} className={classes.heading10}>Back to login screen</Typography>
        </Button>
      </Box>
    </Grid >
  )
}
export default ChangePasswordPopup