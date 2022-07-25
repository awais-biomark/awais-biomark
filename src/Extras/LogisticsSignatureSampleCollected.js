import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Button, Paper } from '@mui/material';
import backward from '../Images/backey.svg'
import { loginPageStyles } from "../Screens/LoginStyles";
import StepperScreen from './StepperScreen';
import BottomNavigationScreen from './BottomNavigationScreen';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const LogisticsSignatureSampleCollected = () => {

  const classes = loginPageStyles();
  const theme = createTheme({ typography: { fontFamily: ['Mukta', 'sans-serif'].join(',') } });
  const titleStyle = { fontSize: '19px', lineHeight: '25px', fontWeight: '700', color: '#111111' };
  const nextbuttonStyle = { backgroundColor: '#FAFAFA', textTransform: 'capitalize', fontSize: '17px', color: '#2A3752', fontWeight: '700', lineHeight: '22px' };
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'  >
      <Box sx={{ maxWidth: '375px', width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
          <Paper sx={{ boxShadow: '0px 0px 8px 1px rgba(0, 0, 0, 0.2)' }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'row', alignContent: 'center' }} >
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'row', alignContent: 'center', marginRight: '14px' }} >
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start', alignContent: 'center', alignItems: 'center' }} >
                  <Box> <img src={backward} alt='' /> </Box>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} >
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', color: '#111111', fontWeight: '700', fontSize: '21px', lineHeight: '27px' }} >
                    <ThemeProvider theme={theme}> <Box sx={{}}>
                      <Typography style={titleStyle} className={classes.heading10}>[Clinic Name]</Typography> </Box> </ThemeProvider>
                  </Box>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-sart', alignContent: 'center', alignItems: 'center' }} >
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', color: '#111111', fontSize: '13px', fontWeight: '400', paddingTop: '14px', lineHeight: '16px', marginBottom: '10px' }}>
                  </Box>
                </Box>
              </Box>
            </Box>
            <StepperScreen />
          </Paper>
        </Box>
        <Box sx={{ my: '162px', display: 'flex', alignContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <CheckCircleIcon sx={{ color: '#54CB83', fontSize: '85px' }} />
          <Box className={classes.heading10} sx={{ marginTop: '40px', fontWeight: '700', fontSize: '19px', lineHeight: '25px', color: '#2A3752' }}>Samples Collected At [Clinic Name]</Box>
          <Box className={classes.heading} sx={{ marginTop: '6px', marginBottom: '32px', fontWeight: '400', fontSize: '13px', lineHeight: '16px', color: '#8493AE' }}>Your orders have been updated at [timestamp]</Box>
          <Button className={classes.heading10} disableRipple variant='text' sx={{ border: 1, borderColor: '#E5E5E5', maxWidth: '320px', width: '100%', borderRadius: '8px', py: '10px', ':hover': { bgcolor: '#FAFAFA' } }} style={nextbuttonStyle}>Close</Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        </Box>
        <Box sx={{ maxWidth: '400px' }} elevation='3'>
          <BottomNavigationScreen />
        </Box>
      </Box>
    </Grid >
  )
}
export default LogisticsSignatureSampleCollected