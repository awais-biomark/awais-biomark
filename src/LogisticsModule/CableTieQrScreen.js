import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import backward from '../Images/backey.svg'
import { loginPageStyles } from "../LoginScreens/LoginStyles";
import QrReaders from './QrReaders';
import StepperScreen from './StepperScreen';
import BottomNavigationScreen from './BottomNavigationScreen';
import { Paper } from '@mui/material';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

export const CableTieQrScreen = () => {
  const classes = loginPageStyles();
  const theme = createTheme({ typography: { fontFamily: ['Mukta'].join(',') } });
  const titleStyle = { fontSize: '19px', lineHeight: '25px', fontWeight: '700', color: '#111111' };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        <Grid container direction='row' justifyContent='center' alignItems='center'  >
          <Box sx={{ width: '100%', }}>
            <Box sx={{ mt: '5px', display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
              <Paper sx={{ boxShadow: 'rgba(0, 0, 0, 0.06) 0px 5px 0px 0px ' }}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'row', alignContent: 'center' }} >
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'row', alignContent: 'center', marginRight: '14px' }} >
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start', alignContent: 'center', alignItems: 'center' }} >
                      <Box sx={{ ml: '13px' }}> <img src={backward} alt='' style={{ width: '9px' }} /> </Box>
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
            <Box className={classes.heading10} sx={{ textAlign: 'center', marginTop: '10px', fontWeight: '700', fontSize: '20px', lineHeight: '33.24px', color: '#054E8B' }}>Scan Cable Tie bag QR code</Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <QrReaders />
            </Box>
            <Box sx={{}} elevation='3'>
              <Box sx={{ fontFamily: 'Mulish', px: '8px', textAlign: 'center', marginTop: '10px', marginBottom: '44px', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '14px', color: '#2A3752', lineHeight: '18.83px' }}>Align the QR code within the highlighted area of the overlay</Box>
              <Box position='fixed' sx={{ width: '100%', bottom: 0 }}>
                <BottomNavigationScreen />
              </Box>
            </Box>
          </Box>
        </Grid >
      </Container >
    </React.Fragment >
  );
}
export default CableTieQrScreen