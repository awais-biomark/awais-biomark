import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import backward from '../Images/backey.svg'
import alertimg from '../Images/alertimg.svg'
import { loginPageStyles } from "../LoginScreens/LoginStyles";
import Divider from '@mui/material/Divider';
import StepperScreen from './StepperScreen';
import BottomNavigationScreen from './BottomNavigationScreen';
import CustomizedInputs from './CustomizedInputs';
import CustomizedCheckBox from './CustomizedCheckBox';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

export const LogisticsConfirmation = (props) => {
  const classes = loginPageStyles();
  const theme = createTheme({ typography: { fontFamily: ['Mukta', 'sans-serif'].join(',') } });
  const titleStyle = { textAlign: 'right', width: '150px', fontSize: '19px', lineHeight: '25px', fontWeight: '700', color: '#111111' };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        <Grid container direction='row' justifyContent='center' alignItems='center'  >
          <Box sx={{ width: '100%', mt: '5px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
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

            <Box className={classes.heading10} sx={{ px: '15px', textAlign: 'left', marginBottom: '7px', marginTop: '14px', fontWeight: '700', fontSize: '17px', lineHeight: '22px', color: '#054E8B' }}>Tampines Clinic</Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            </Box>
            <Box sx={{ pl: '10px', bgcolor: '#054E8B', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '6px' }}>
              <Box className={classes.heading10} sx={{ color: '#ffffff', fontWeight: '700', fontSize: '15px', lineHeight: '20px', maxWidth: '150px', width: '100%' }}>Order ID </Box>
              <Box className={classes.heading10} sx={{ color: '#ffffff', fontWeight: '700', fontSize: '15px', lineHeight: '20px', maxWidth: '182px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>No. of Samples</Box>
            </Box>
            <Divider sx={{ bgcolor: "#CAD3E5" }} />
            <Box sx={{ pl: '10px', bgcolor: '#EBEFF5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ fontFamily: 'Mulish', color: '#2A3752', fontWeight: '400', fontSize: '14px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>1 QDE-CCM-0001 </Box>
              <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', }}>
                <CustomizedInputs />
                <CustomizedCheckBox />
              </Box>
            </Box>
            <Divider sx={{ bgcolor: "#CAD3E5" }} />
            <Box sx={{ pl: '10px', bgcolor: '#EBEFF5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ fontFamily: 'Mulish', color: '#2A3752', fontWeight: '400', fontSize: '14px', lineHeight: '19px', maxWidth: '150px', width: '100%', mr: '3px' }}>2 QDE-CCM-0002</Box>
                <img src={alertimg} alt='' />
              </Box>
              <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', }}>
                <CustomizedInputs />
                <CustomizedCheckBox />
              </Box>
            </Box>
            <Divider sx={{ bgcolor: "#CAD3E5" }} />
            <Box sx={{ pl: '10px', bgcolor: '#EBEFF5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ fontFamily: 'Mulish', color: '#2A3752', fontWeight: '400', fontSize: '14px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>3 QDE-CCM-0003 </Box>
              <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', }}>
                <CustomizedInputs />
                <CustomizedCheckBox />
              </Box>
            </Box>
            <Divider sx={{ bgcolor: "#CAD3E5" }} />
            <Box sx={{ pl: '10px', bgcolor: '#EBEFF5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ fontFamily: 'Mulish', color: '#2A3752', fontWeight: '400', fontSize: '14px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>4 QDE-CCM-0004 </Box>
              <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', }}>
                <CustomizedInputs />
                <CustomizedCheckBox />
              </Box>
            </Box>
            <Divider sx={{ bgcolor: "#CAD3E5" }} />
            <Box sx={{ pl: '10px', bgcolor: '#EBEFF5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ fontFamily: 'Mulish', color: '#2A3752', fontWeight: '400', fontSize: '14px', lineHeight: '19px', maxWidth: '150px', width: '100%', mr: '3px' }}>5 Non-eOrder</Box>
                <img src={alertimg} alt='' />
              </Box>
              <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', }}>
                <CustomizedInputs />
                <CustomizedCheckBox />
              </Box>
            </Box>
            <Divider sx={{ bgcolor: "#CAD3E5" }} />
            <Box sx={{ marginTop: '10px', marginBottom: '137px', fontFamily: 'Mulish', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '14px', color: '#111111', lineHeight: '19px', textAlign: 'center' }}>Collected at 11:00am, 21 jun 2022</Box>
            <Box position="fixed" sx={{ bottom: 0, width: '100%', marginTop: '309px', }} elevation='3'>
              <BottomNavigationScreen />
            </Box>
          </Box>
        </Grid >
      </Container >
    </React.Fragment >
  );
}
export default LogisticsConfirmation