import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import { loginPageStyles } from "./LoginStyles";
const border_button = { border: 2 };
const titleStyle = { fontSize: '19px', lineHeight: '25px', fontWeight: '700', color: '#054E8B' };
const descStyle = { fontSize: '15px', lineHeight: '19px', fontWeight: '400', color: '#2A3752' };
const buttonStyle = { textTransform: 'capitalize', fontSize: '15px', color: '#2A3752', fontWeight: '700', lineHeight: '20px' };
const InActiveAccountPopup = () => {
  const classes = loginPageStyles();
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Box sx={{ boxShadow: '3', paddingBottom: '12px', px: '12px', paddingTop: '20px', borderRadius: '8px', backgroundColor: '#FFFFFF', maxWidth: '351px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box> <DoNotDisturbIcon sx={{ color: '#FFD75E', fontSize: 58 }} /></Box>
        <Box sx={{ textAlign: 'center', marginTop: '15px', marginBottom: '12px' }}>
          <Box style={titleStyle} className={classes.heading10}>Account Inactive</Box></Box>
        <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
          <Box style={descStyle}>You cannot access the app as your account has been deactivated.</Box></Box>
        <Button disableRipple variant='text' sx={{ ...border_button, width: '100%', borderRadius: '8px', borderColor: '#1B96D8', bgcolor: '#ffffff', ':hover': { bgcolor: '#ffffff' } }}>
          <Box style={buttonStyle} className={classes.heading10}>Okay</Box>
        </Button>
      </Box>
    </Grid>
  )
}
export default InActiveAccountPopup