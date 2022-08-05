import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { loginPageStyles } from "../LoginScreens/LoginStyles";
import biomark_text from '../Images/biomark_text.svg';
import biomark_logo from '../Images/biomark_logo.svg';

const titleStyle = {};
const descStyle = { fontFamily: 'Mulish', fontSize: '15px', lineHeight: '19px', fontWeight: '400', color: '#455066' };
const nextbuttonStyle = { fontFamily: 'Mulish', backgroundColor: '#054E8B', textTransform: 'capitalize', fontSize: '15px', color: '#FFFFFF', fontWeight: '700', lineHeight: '20px' };
const cancelbuttonStyle = { fontFamily: 'Mulish', backgroundColor: '#FAFAFA', textTransform: 'capitalize', fontSize: '15px', color: '#EA4C59', fontWeight: '400', lineHeight: '19px' };
const LogisticsConfirmSamplePopup = () => {
  const classes = loginPageStyles();
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Box sx={{ boxShadow: '3', paddingBottom: '20px', px: '14px', paddingTop: '32px', borderRadius: '8px', backgroundColor: '#FFFFFF', maxWidth: '351px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignContent: 'center', maxWidth: '148px', justifyContent: 'space-between' }}>
          <img src={biomark_logo} alt='' style={{ width: '44px' }} />
          <Box sx={{ mr: '11px' }}></Box>
          <img src={biomark_text} alt='' style={{ width: '92px' }} />
        </Box>
        <Box sx={{ textAlign: 'center', marginTop: '20px', marginBottom: '8px' }}>
          <Box sx={{ fontFamily: 'Mukta', fontSize: '17px', lineHeight: '22px', fontWeight: '700', color: '#054E8B' }}>Confirm Orders and Sample Count!</Box></Box>
        <Box sx={{ textAlign: 'center', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
          <Box style={descStyle}>Ensure checking that the orders and quantity that you are collecting is correct.</Box></Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Button disableRipple variant='text' sx={{ maxWidth: '133px', width: '100%', borderRadius: '10px', py: '10px', ':hover': { bgcolor: '#ffffff' } }} style={cancelbuttonStyle}>Check Again</Button>
          <Button disableRipple variant='text' sx={{ maxWidth: '133px', width: '100%', borderRadius: '8px', py: '10px', ':hover': { bgcolor: '#054E8B' } }} style={nextbuttonStyle}>Confirm</Button>
        </Box>
      </Box>
    </Grid>
  )
}
export default LogisticsConfirmSamplePopup