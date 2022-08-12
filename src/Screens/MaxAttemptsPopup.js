import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { loginPageStyles } from "./LoginStyles";
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';

const border_button = { border: 2 };
const titleStyle = { fontSize: '19px', lineHeight: '25px', fontWeight: '700', color: '#054E8B' };
const descStyle = { fontSize: '14px', lineHeight: '19px', fontWeight: '400', color: '#2A3752' };
const descStyle1 = { fontSize: '13.5px', lineHeight: '19px', fontWeight: '400', color: '#2A3752' };
const buttonStyle = { textTransform: 'capitalize', fontSize: '15px', color: '#2A3752', fontWeight: '700', lineHeight: '20px' };
const MaxAttempts_Popup = () => {
  const classes = loginPageStyles();
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Box sx={{ boxShadow: '3', paddingBottom: '12px', px: '12px', paddingTop: '17px', borderRadius: '8px', backgroundColor: '#FFFFFF', maxWidth: '351px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box> <DoNotDisturbIcon sx={{ color: '#EA4C59', fontSize: 58 }} /></Box>
        <Box sx={{ textAlign: 'center', marginTop: '15px', marginBottom: '12px' }}>
          <Box style={titleStyle} className={classes.heading10}>Max attempts reached</Box></Box>
        <Box sx={{ textAlign: 'center', marginBottom: '10px' }}>
          <Box style={descStyle} sx={{ fontFamily: 'Sans' }}>You have used up 5 attempts to log in to your account.</Box></Box>
        <Box sx={{ marginBottom: '20px' }}>
          <Box style={descStyle1} sx={{ fontFamily: 'Sans' }}>To unlock, please contact your lab management.</Box></Box>
        <Button disableRipple variant='text' sx={{ ...border_button, width: '100%', borderRadius: '8px', borderColor: '#054E8B', bgcolor: '#ffffff', ':hover': { bgcolor: '#ffffff' } }}>
          <Box style={buttonStyle} className={classes.heading10}>Okay</Box>
        </Button>
      </Box>
    </Grid >
  )
}
export default MaxAttempts_Popup
