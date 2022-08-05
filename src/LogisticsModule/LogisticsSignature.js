import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Button, Divider, Paper } from '@mui/material';
import backward from '../Images/backey.svg'
import alertimg from '../Images/alertimg.svg'
import { loginPageStyles } from "../LoginScreens/LoginStyles";
import StepperScreen from './StepperScreen';
import BottomNavigationScreen from './BottomNavigationScreen';
import CustomizedInputs from './CustomizedInputs';
import InputForSIgnatureIndication from './InputForSIgnatureIndication';
import LogisticsSignaturePopUp from './LogisticsSignaturePopUp';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

export const LogisticsSignature = () => {
  const classes = loginPageStyles();
  const commonStyles = { maxWidth: '344px', color: '#DAE0EB', borderColor: '#DAE0EB', width: '100%', height: '160px', borderRadius: '8px' };
  const theme = createTheme({ typography: { fontFamily: ['Mukta', 'sans-serif'].join(',') } });
  const titleStyle = { fontSize: '19px', lineHeight: '25px', fontWeight: '700', color: '#111111' };
  const refreshStyle = { fontFamily: 'Mulish', width: '100%', maxWidth: '48px', textAlign: 'center', display: 'flex', backgroundColor: '#FAFAFA', textTransform: 'none', fontSize: '13px', color: '#455066', fontWeight: '400', lineHeight: '16px' };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
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
            <Box sx={{ mt: '10px', display: 'flex', color: '#111111', fontWeight: '700', fontSize: '21px', lineHeight: '27px' }} >

              <Box sx={{ fontSize: '19px', lineHeight: '25px', fontWeight: '700', color: '#054E8B', display: 'flex', alignitems: 'center' }} className={classes.heading10}>Order Tally</Box>

              <Box sx={{ fontSize: '12px', lineHeight: '16px', fontWeight: '400', color: '#455066', display: 'flex', alignitems: 'center', alignContent: 'center', ml: '5px', py: '5px' }} className={classes.heading}>Please check if the quantities are correct.</Box>
            </Box>
            <Box sx={{ mt: '4px', pl: '10px', bgcolor: '#054E8B', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '6px' }}>
              <Box className={classes.heading10} sx={{ color: '#ffffff', fontWeight: '700', fontSize: '15px', lineHeight: '20px', maxWidth: '150px', width: '100%' }}>Order ID </Box>
              <Box className={classes.heading10} sx={{ color: '#ffffff', fontWeight: '700', fontSize: '15px', lineHeight: '20px', maxWidth: '182px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>No. of Samples</Box>
            </Box>
            <Divider sx={{ bgcolor: "#CAD3E5" }} />
            <Box sx={{ pl: '10px', pr: '20px', py: '8px', bgcolor: '#EBEFF5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ fontFamily: 'Mulish', color: '#2A3752', fontWeight: '400', fontSize: '15px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>1 QDE-CCM-0001 </Box>
              <Box sx={{ pl: '20px', display: 'flex', alignContent: 'end', alignItems: 'center', }}>
                <CustomizedInputs />
              </Box>
            </Box>
            <Divider sx={{ bgcolor: "#CAD3E5" }} />
            <Box sx={{ pl: '10px', py: '8px', pr: '20px', bgcolor: '#EBEFF5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ fontFamily: 'Mulish', color: '#2A3752', fontWeight: '400', fontSize: '15px', lineHeight: '19px', maxWidth: '150px', width: '100%', mr: '3px' }}>2 QDE-CCM-0002</Box>
                <img src={alertimg} alt='' />
              </Box>
              <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', }}>
                <CustomizedInputs />
              </Box>
            </Box>
            <Divider sx={{ bgcolor: "#CAD3E5" }} />
            <Box sx={{ pl: '10px', py: '8px', pr: '20px', bgcolor: '#EBEFF5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ fontFamily: 'Mulish', color: '#2A3752', fontWeight: '400', fontSize: '15px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>3 QDE-CCM-0003 </Box>
              <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', }}>
                <CustomizedInputs />
              </Box>
            </Box>
            <Divider sx={{ bgcolor: "#CAD3E5" }} />
            <Box sx={{ pl: '10px', py: '8px', pr: '20px', bgcolor: '#EBEFF5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ fontFamily: 'Mulish', color: '#2A3752', fontWeight: '400', fontSize: '15px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>4 QDE-CCM-0004 </Box>
              <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', }}>
                <CustomizedInputs />
              </Box>
            </Box>
            <Divider sx={{ bgcolor: "#CAD3E5" }} />
            <Box sx={{ pl: '10px', py: '8px', pr: '20px', bgcolor: '#EBEFF5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ fontFamily: 'Mulish', color: '#2A3752', fontWeight: '400', fontSize: '15px', lineHeight: '19px', maxWidth: '150px', width: '100%', mr: '3px' }}>5 Non-eOrder</Box>
                <img src={alertimg} alt='' />
              </Box>
              <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', }}>
                <CustomizedInputs />
              </Box>
            </Box>
            <Divider sx={{ bgcolor: "#CAD3E5" }} />
            <Box className={classes.heading10} sx={{ textAlign: 'center', marginTop: '22px', fontWeight: '700', fontSize: '20px', lineHeight: '33.24px', color: '#054E8B' }}>Clinic Staff Confirmation</Box>
            <Box className={classes.heading} sx={{ textAlign: 'center', fontWeight: '400', fontSize: '13px', lineHeight: '16px', color: '#2A3752', marginBottom: '14px' }}>I declare that the above collection is correct and acceptable by [Clinic Name]</Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', alignContent: 'center', ...commonStyles, border: 1, borderColor: '#1B96D8', }}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }} >
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: '8px', }}>
                    <Box sx={{ maxWidth: '240px', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}>
                      <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'row', fontWeight: '400', fontSize: '13px', lineHeight: '12px', color: '#8493AE', mt: '7px', }}> Sign within the box</Box>
                      <Button className={classes.heading} disableRipple variant='text' sx={{ border: 1, borderColor: '#E5E5E5', alignItems: 'center', textAlign: 'center', mt: '6px', marginBottom: '10px', maxWidth: '148px', width: '100%', borderRadius: '99px', px: '6px', py: '2px', boxShadow: '2', ':hover': { bgcolor: '#ffffff' } }} style={refreshStyle}>Clear</Button>
                    </Box>
                  </Box>
                  <Box className={classes.headfamily} sx={{ display: 'flex', mt: '17px', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', fontWeight: '400', fontSize: '30px', lineHeight: '61.2px', color: '#054E8B' }}>  Clinic Staff Signs</Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '14px', maxWidth: '344px', width: '100%' }}>
                <Box className={classes.heading} sx={{ textAlign: 'center', fontWeight: '400', fontSize: '13px', lineHeight: '16px', color: '#455066' }}>Please indicate your name</Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px', maxWidth: '344px', width: '100%' }}>
                <InputForSIgnatureIndication /> </Box>
            </Box>
            <Box sx={{ width: '100%', mt: '12px' }} elevation='3'>
              <LogisticsSignaturePopUp />
              <Box sx={{ width: '100%' }}>
                <BottomNavigationScreen />
              </Box>
            </Box>
          </Box>
        </Grid >
      </Container >
    </React.Fragment >

  );
}
export default LogisticsSignature