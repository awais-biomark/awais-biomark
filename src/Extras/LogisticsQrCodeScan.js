import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import backward from '../Images/backey.svg'
import { loginPageStyles } from "../Screens/LoginStyles";
import QrReaders from './QrReaders';
import StepperScreen from './StepperScreen';
import BottomNavigationScreen from './BottomNavigationScreen';

export const LogisticsQrCodeScan = () => {
  const classes = loginPageStyles();
  const theme = createTheme({ typography: { fontFamily: ['Mukta'].join(',') } });
  const titleStyle = { fontSize: '19px', lineHeight: '25px', fontWeight: '700', color: '#111111', width: '100%' };
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'  >
      <Box sx={{ maxWidth: '375px', width: '100%', paddingLeft: '10px', paddingRight: '10px' }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'row', alignContent: 'center', marginTop: '20px' }} >
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'row', alignContent: 'center', marginRight: '14px' }} >
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start', alignContent: 'center', alignItems: 'center' }} >
              <Box> <img src={backward} alt='' /> </Box>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} >
              <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', color: '#111111', fontWeight: '700', fontSize: '21px', lineHeight: '27px' }} >
                <ThemeProvider theme={theme}> <Box sx={{}}>
                  <Typography style={titleStyle} className={classes.heading10}>Clinic Qr</Typography> </Box> </ThemeProvider>
              </Box>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-sart', alignContent: 'center', alignItems: 'center' }} >
              <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', color: '#111111', fontSize: '13px', fontWeight: '400', paddingTop: '14px', lineHeight: '16px', marginBottom: '10px' }} > </Box>
            </Box>
          </Box>
        </Box>
        <StepperScreen />
        <Box className={classes.heading10} sx={{ textAlign: 'center', marginTop: '10px', fontWeight: '700', fontSize: '20px', lineHeight: '33.24px', color: '#054E8B' }}>Scan Clinic QR Code</Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <QrReaders />
        </Box>
        <Box sx={{ maxWidth: '400px', marginTop: '20px', }} elevation='3'>
          <Box className={classes.heading} sx={{ textAlign: 'center', marginTop: '10px', marginBottom: '44px', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '15px', color: '#2A3752', lineHeight: '18.83px' }}>Scan the Clinic QR Code to check into the clinic</Box>
          <BottomNavigationScreen />
        </Box>
      </Box>
    </Grid >
  )
}
export default LogisticsQrCodeScan