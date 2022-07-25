import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import back_icon from '../Images/backicon.svg';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';

export const ChangePasswordScreen = () => {
  let navigate = useNavigate();
  const login_verify = () => { navigate('/login_verify'); };
  const back_to_main = () => { navigate('/login'); };
  const theme = createTheme({ typography: { fontFamily: ['Mukta', 'sans-serif'].join(',') } });
  const titleStyle = { fontSize: '25px', lineHeight: '41.55px', fontWeight: '700', color: '#000000' };
  const buttonStyle = { textTransform: 'capitalize', fontSize: '19px', color: '#FFFFFF', fontWeight: '700', lineHeight: '25px' };
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' height='100%'>
      <Box sx={{ maxWidth: '375px', width: '100%' }}>
        <Grid onClick={back_to_main} container direction='row' justifyContent='flex-start'>
          <Box sx={{ fontWeight: '400', fontSize: '13px', lineHeight: '16px', color: '#000000' }}> <img src={back_icon} alt='' /></Box>
          <Box sx={{ marginTop: '3px', fontWeight: '400', fontSize: '13px', lineHeight: '16px', color: '#000000' }}>Back</Box>
        </Grid>
        <Box sx={{ px: '10px' }}>
          <ThemeProvider theme={theme}> <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', marginTop: '178px', marginBottom: '34px' }}>
            <Typography style={titleStyle}> Change Password</Typography></Box></ThemeProvider>
          <Box sx={{ marginBottom: '4px', display: 'flex', justifyContent: 'start', fontWeight: '400', fontSize: '13px', color: '#455066', lineHeight: '16px', maxWidth: '300px' }}>New Password</Box>
          <Box sx={{ marginBottom: '14px', display: "flex", border: 1, borderRadius: '4px', px: '8px', py: '6px', borderColor: '#DAE0EB' }}  >
            <TextField variant="standard" placeholder='Placeholder' sx={{ display: 'flex', width: '270px' }} InputProps={{ disableUnderline: true }} /></Box>
          <Box sx={{ marginBottom: '4px', display: 'flex', justifyContent: 'start', fontWeight: '400', fontSize: '13px', color: '#455066', lineHeight: '16px', maxWidth: '300px' }}>Confirm Password</Box>
          <Box sx={{ display: "flex", border: 1, borderRadius: '4px', px: '8px', py: '6px', borderColor: '#DAE0EB' }}> <TextField variant="standard" placeholder='Placeholder' sx={{ display: 'flex', width: '270px' }} InputProps={{ disableUnderline: true }} /> </Box>
          <Box sx={{ marginTop: '72px', display: 'flex', justifyContent: 'center' }} >
            <Button onClick={login_verify} disableRipple variant='text' sx={{ maxWidth: '240px', width: '100%', borderRadius: '8px', background: '#054E8B', bgcolor: '#054E8B', color: '#ffffff', ':hover': { bgcolor: '#054E8B', color: '#ffffff' } }}>
              <ThemeProvider theme={theme}> <Typography style={buttonStyle}> Change Password</Typography> </ThemeProvider>
            </Button>
          </Box>
          <Box sx={{ marginTop: '185px', marginBottom: '40px', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '13px', color: '#2A3752', lineHeight: '16px' }}>Version X.X</Box>
        </Box>
      </Box>
    </Grid>
  )
}
export default ChangePasswordScreen