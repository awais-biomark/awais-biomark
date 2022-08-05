import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import backbutton from '../Images/backbutton.svg';
import { useNavigate } from 'react-router-dom';
import ChangePasswordPopVew from './ChangePasswordPopVew';
import { loginPageStyles } from "../LoginScreens/LoginStyles";

export const ChangePasswordScreen = () => {
  let navigate = useNavigate();
  const back_to_main = () => { navigate('/login'); };
  const titleStyle = { fontSize: '24px', lineHeight: '31px', fontWeight: '700', color: '#000000' };
  const classes = loginPageStyles();
  return (

    <Grid container direction='row' justifyContent='center' alignItems='center' width='100%'>
      <Box sx={{ width: '100%' }}>
        <Grid onClick={back_to_main} container direction='row' justifyContent='flex-start' >
          <Box sx={{ mr: '0.1875rem', cursor: 'pointer', display: 'flex', justifyContent: 'flex-start', alignContent: 'flex-start', fontWeight: '400', fontSize: '13px', lineHeight: '16px', color: '#000000' }}>
            <img src={backbutton} alt='' style={{ width: '24px' }} /> </Box>
          <Box sx={{ fontFamily: 'Mulish', fontStyle: 'normal', cursor: 'pointer', mt: '0.1875rem', fontWeight: '400', fontSize: '15px', lineHeight: '19px', color: '#111111' }}>Back</Box>  </Grid>
        <Box sx={{ px: '10px' }}>
          <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', mt: '14.0625rem', mb: '1.25rem' }}>
            <Box className={classes.heading10} style={titleStyle}> Change Password</Box></Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ maxWidth: '240px', width: '100%' }}>
              <Box className={classes.heading} sx={{ mb: '0.25rem', display: 'flex', justifyContent: 'start', fontWeight: '400', fontSize: '13px', color: '#455066', lineHeight: '16px', width: '100%' }}>New Password</Box>
              <Box sx={{ mb: '1.25rem', display: "flex", border: 1, borderRadius: '4px', px: '8px', py: '6px', borderColor: '#DAE0EB' }}  >
                <TextField variant="standard" placeholder='Placeholder' sx={{ '& .MuiInputBase-input': { fontFamily: 'Sans', fontWeight: '400', fontSize: '16px', lineHeight: '21px' }, display: 'flex', width: '100%' }} InputProps={{ disableUnderline: true }} /></Box>
              <Box className={classes.heading} sx={{ mb: '0.25rem', display: 'flex', justifyContent: 'start', fontWeight: '400', fontSize: '13px', color: '#455066', lineHeight: '16px', width: '100%' }}>Confirm Password</Box>
              <Box sx={{ display: "flex", border: 1, borderRadius: '4px', px: '8px', py: '6px', borderColor: '#DAE0EB' }}> <TextField variant="standard" placeholder='Placeholder' sx={{ '& .MuiInputBase-input': { fontFamily: 'Sans', fontWeight: '400', fontSize: '16px', lineHeight: '21px' }, display: 'flex', width: '100%' }} InputProps={{ disableUnderline: true }} /> </Box>
            </Box>
          </Box>
          <ChangePasswordPopVew />
          <Box sx={{ fontFamily: 'Sans', mt: '10.875rem', mb: '2.5rem', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '13px', color: '#2A3752', lineHeight: '16px' }}>Version X.X</Box>
        </Box>
      </Box>
    </Grid>
  )
}
export default ChangePasswordScreen