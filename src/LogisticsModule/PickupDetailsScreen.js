import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import backward from '../Images/backey.svg'
import alertimg from '../Images/alertimg.svg'
import { loginPageStyles } from "../LoginScreens/LoginStyles";
import Divider from '@mui/material/Divider';
import StepperScreen from './StepperScreen';
import BottomNavigationScreen from './BottomNavigationScreen';
import CustomizedInputForPIckupDetails from './CustomizedInputForPIckupDetails';
import ConfirmSamplesPopup from './ConfirmSamplesPopup';
import CustomizedCheckBox from './CustomizedCheckBox';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

export const PickupDetailsScreen = () => {

  const classes = loginPageStyles();
  const theme = createTheme({ typography: { fontFamily: ['Mukta', 'sans-serif'].join(',') } });
  const titleStyle = { textAlign: 'right', width: '150px', fontSize: '19px', lineHeight: '25px', fontWeight: '700', color: '#111111' };
  const buttonStyle = { fontFamily: 'Mukta', width: '100%', maxWidth: '150px', textAlign: 'center', display: 'flex', backgroundColor: '#FAFAFA', textTransform: 'none', fontSize: '15px', color: '#2A3752', fontWeight: '700', lineHeight: '20px' };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        <Grid container direction='row' justifyContent='center' alignItems='center'  >
          <Box sx={{ width: '100%' }}>
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', mt: '12px', mb: '10px', px: '16px' }}>
              <Box className={classes.heading10} sx={{ display: 'flex', alignItems: 'center', alignContent: 'center', textAlign: 'left', fontWeight: '700', fontSize: '17px', lineHeight: '22px', color: '#054E8B' }}>[Clinic Name]</Box>
            </Box>
            <Box sx={{ pl: '12px', bgcolor: '#054E8B', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '6px' }}>
              <Box className={classes.heading10} sx={{ color: '#ffffff', fontWeight: '700', fontSize: '15px', lineHeight: '20px', maxWidth: '150px', width: '100%' }}>Order ID </Box>
              <Box className={classes.heading10} sx={{ color: '#ffffff', fontWeight: '700', fontSize: '14px', lineHeight: '20px', maxWidth: '180px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>No. of Samples</Box>
            </Box>
            <Divider />
            <Box sx={{ pl: '12px', bgcolor: '#FAFAFA', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
              <Box className={classes.heading} sx={{ color: '#2A3752', fontWeight: '400', fontSize: '14px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>1 [Order ID] </Box>
              <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', }}>
                <CustomizedInputForPIckupDetails />
                <CustomizedCheckBox />

              </Box>
            </Box>
            <Divider />
            <Box sx={{ pl: '12px', bgcolor: '#FAFAFA', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex' }}>
                <Box className={classes.heading} sx={{ color: '#2A3752', fontWeight: '400', fontSize: '14px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>2 QDE-CCM-0002
                </Box>
                <img src={alertimg} alt='' />
              </Box>
              <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', }}>
                <CustomizedInputForPIckupDetails />
                <CustomizedCheckBox />
              </Box>
            </Box>
            <Divider />
            <Box sx={{ pl: '12px', bgcolor: '#FAFAFA', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box className={classes.heading} sx={{ color: '#2A3752', fontWeight: '400', fontSize: '14px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>3 [Order ID] </Box>
              <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', }}>
                <CustomizedInputForPIckupDetails />
                <CustomizedCheckBox />
              </Box>
            </Box>
            <Divider />
            <Box sx={{ pl: '12px', bgcolor: '#FAFAFA', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box className={classes.heading} sx={{ color: '#2A3752', fontWeight: '400', fontSize: '14px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>4 [Order ID]</Box>
              <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', }}>
                <CustomizedInputForPIckupDetails />
                <CustomizedCheckBox />
              </Box>
            </Box>
            <Divider />
            <Box sx={{ pl: '12px', bgcolor: '#FAFAFA', display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: '4px' }}>
              <Box sx={{ display: 'flex' }}>
                <Box className={classes.heading} sx={{ color: '#2A3752', fontWeight: '400', fontSize: '14px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>5 Non-eOrder
                </Box>
              </Box>  <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center' }}>
                <CustomizedInputForPIckupDetails />
                <CustomizedCheckBox />
              </Box>
            </Box>
            <Divider />
            <Box className={classes.heading} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button className={classes.heading} disableRipple variant='text' sx={{ border: 1, borderColor: '#E5E5E5', textAlign: 'center', marginTop: '12px', marginBottom: '16px', maxWidth: '148px', py: '10px', width: '100%', borderRadius: '8px', ':hover': { bgcolor: '#ffffff' } }} style={buttonStyle}>Add Non-eOrder</Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ maxWidth: '320px', width: '100%', marginTop: '20px', marginBottom: '120px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <CustomizedCheckBox />
                <Box className={classes.heading} sx={{ ml: '2px', display: 'flex', justifyContent: 'center', alignitems: 'center', fontWeight: '400', fontSize: '14px', color: '#111111', lineHeight: '19px', textAlign: 'center' }}>I ensure you have checked that the samples and quantity are correct.</Box>
              </Box>
            </Box>
            <Box sx={{ width: '100%' }} elevation='3'>
              <ConfirmSamplesPopup />
              <Box sx={{ mb: '32px' }}></Box>
              <Box position='fixed' sx={{ bottom: 0, width: '100%', }}>
                <BottomNavigationScreen />
              </Box>
            </Box>
          </Box>
        </Grid >
      </Container >
    </React.Fragment >
  );
}
export default PickupDetailsScreen