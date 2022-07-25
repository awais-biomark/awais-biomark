import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ErrorIcon from '@mui/icons-material/Error';
import { Button, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import backward from '../Images/backey.svg'
import alertimg from '../Images/alertimg.svg'
import { loginPageStyles } from "../Screens/LoginStyles";
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import StepperScreen from './StepperScreen';
import BottomNavigationScreen from './BottomNavigationScreen';
import CustomizedInputs from './CustomizedInputs';
import CheckboxDropdown from './CheckboxDropdown';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const LogisticsConfirmation = () => {
  const classes = loginPageStyles();
  const theme = createTheme({ typography: { fontFamily: ['Mukta', 'sans-serif'].join(',') } });
  const titleStyle = { textAlign: 'right', width: '150px', fontSize: '19px', lineHeight: '25px', fontWeight: '700', color: '#111111' };
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'  >
      <Box sx={{ maxWidth: '375px', width: '100%', paddingLeft: '10px', paddingRight: '10px' }}>
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
        <Box className={classes.heading10} sx={{ textAlign: 'left', marginBottom: '10px', marginTop: '20px', fontWeight: '700', fontSize: '17px', lineHeight: '22px', color: '#054E8B' }}>Tampines Clinic</Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        </Box>
        <Box sx={{ bgcolor: '#054E8B', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '6px', maxWidth: 375 }}>
          <Box className={classes.heading10} sx={{ color: '#ffffff', fontWeight: '700', fontSize: '15px', lineHeight: '20px', maxWidth: '150px', width: '100%' }}>Order ID </Box>
          <Box className={classes.heading10} sx={{ color: '#ffffff', fontWeight: '700', fontSize: '15px', lineHeight: '20px', maxWidth: '160px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>No. of Samples</Box>
        </Box>
        <Divider />
        <Box sx={{ border: 1, borderColor: '#CAD3E5', bgcolor: '#EBEFF5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '6px', maxWidth: 375 }}>
          <Box className={classes.heading} sx={{ color: '#2A3752', fontWeight: '400', fontSize: '15px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>1 QDE-CCM-0001 </Box>
          <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', maxWidth: '150px', width: '100%' }}>
            <Box className={classes.heading} sx={{ color: '#455066', fontWeight: '400', fontSize: '13px', lineHeight: '16px', maxWidth: '211px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>[QTY]/ [Qty] </Box>
            <Checkbox {...label} />
          </Box>
        </Box>
        <Box sx={{ border: 1, borderColor: '#CAD3E5', bgcolor: '#EBEFF5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '6px', maxWidth: 375 }}>
          <Box sx={{ display: 'flex' }}>
            <Box className={classes.heading} sx={{ color: '#2A3752', fontWeight: '400', fontSize: '15px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>2 QDE-CCM-0002
            </Box>
            <img src={alertimg} alt='' />
          </Box>
          <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', maxWidth: '150px', width: '100%' }}>
            <Box className={classes.heading} sx={{ color: '#455066', fontWeight: '400', fontSize: '13px', lineHeight: '16px', maxWidth: '211px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>[QTY]/ [Qty] </Box>
            <Checkbox {...label} />
          </Box>
        </Box>
        <Box sx={{ border: 1, borderColor: '#CAD3E5', bgcolor: '#EBEFF5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '6px', maxWidth: 375 }}>
          <Box className={classes.heading} sx={{ color: '#2A3752', fontWeight: '400', fontSize: '15px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>3 QDE-CCM-0003 </Box>
          <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', maxWidth: '150px', width: '100%' }}>
            <Box className={classes.heading} sx={{ color: '#455066', fontWeight: '400', fontSize: '13px', lineHeight: '16px', maxWidth: '211px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>[QTY]/ [Qty] </Box>
            <Checkbox {...label} />
          </Box>
        </Box>
        <Box sx={{ border: 1, borderColor: '#CAD3E5', bgcolor: '#EBEFF5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '6px', maxWidth: 375 }}>
          <Box className={classes.heading} sx={{ color: '#2A3752', fontWeight: '400', fontSize: '15px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>4 QDE-CCM-0004 </Box>
          <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', maxWidth: '150px', width: '100%' }}>
            <Box className={classes.heading} sx={{ color: '#455066', fontWeight: '400', fontSize: '13px', lineHeight: '16px', maxWidth: '211px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>[QTY]/ [Qty] </Box>
            <Checkbox {...label} />
          </Box>
        </Box>
        <Box sx={{ bgcolor: '#EBEFF5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '6px', maxWidth: 375 }}>
          <Box sx={{ display: 'flex' }}>
            <Box className={classes.heading} sx={{ color: '#2A3752', fontWeight: '400', fontSize: '15px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>5 Non-eOrder
            </Box>
            <img src={alertimg} alt='' />
          </Box>  <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', maxWidth: '150px', width: '100%' }}>
            <Box className={classes.heading} sx={{ color: '#455066', fontWeight: '400', fontSize: '13px', lineHeight: '16px', maxWidth: '211px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>[QTY]/ [Qty] </Box>
            <Checkbox {...label} />
          </Box>
        </Box>

        <Box className={classes.heading} sx={{ marginTop: '10px', marginBottom: '137px', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '15px', color: '#111111', lineHeight: '19px', textAlign: 'center' }}>Collected at 11:00am, 21 jun 2022</Box>
        <Box sx={{ maxWidth: '400px', marginTop: '225px', }} elevation='3'>
          <BottomNavigationScreen />
        </Box>
      </Box>
      {/* <CheckboxDropdown /> */}
    </Grid >
  )
}
export default LogisticsConfirmation