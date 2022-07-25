import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Checkbox, Typography } from "@material-ui/core";
import { Button, Divider, Paper } from '@mui/material';
import backward from '../Images/backey.svg'
import alertimg from '../Images/alertimg.svg'
import { loginPageStyles } from "../Screens/LoginStyles";
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import StepperScreen from './StepperScreen';
import BottomNavigationScreen from './BottomNavigationScreen';
import CustomizedInputs from './CustomizedInputs';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: 288px; color: #000000; background: #ffffff; border: 1px solid #1B96D8; border-radius: 12px; padding: 12px 12px; border-color: '#1B96D8';
  &:hover { border: 1px solid #1B96D8; border-color: '#1B96D8'; outline: none; }
  &:focus { border: 1px solid #1B96D8; border-color: '#1B96D8'; outline:none; }`,);
const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (<InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />);
});

export const LogisticsSignature = () => {

  const classes = loginPageStyles();
  const commonStyles = { maxWidth: '344px', color: '#DAE0EB', borderColor: '#DAE0EB', width: '100%', height: '160px', borderRadius: 'px' };
  const theme = createTheme({ typography: { fontFamily: ['Mukta', 'sans-serif'].join(',') } });
  const titleStyle = { fontSize: '19px', lineHeight: '25px', fontWeight: '700', color: '#111111' };
  const nextbuttonStyle = { backgroundColor: '#054E8B', textTransform: 'capitalize', fontSize: '15px', color: '#FFFFFF', fontWeight: '700', lineHeight: '24.93px' };
  const cancelbuttonStyle = { backgroundColor: '#FAFAFA', textTransform: 'capitalize', fontSize: '15px', color: '#EA4C59', fontWeight: '400', lineHeight: '18.83px' };

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '6px', width: '100%' }}>
          <Box className={classes.heading10} sx={{ fontWeight: '700', fontSize: '16px', lineHeight: '25px', color: '#054E8B' }}>Order Tally</Box>
          <Box className={classes.heading} sx={{ fontWeight: '400', fontSize: '13px', lineHeight: '16px', color: '#455066', display: 'flex', justifyContent: 'flex-start' }}>Please check if the quantities are correct.</Box>
        </Box>
        <Box sx={{ bgcolor: '#054E8B', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '6px', maxWidth: 375 }}>
          <Box className={classes.heading10} sx={{ color: '#ffffff', fontWeight: '700', fontSize: '15px', lineHeight: '20px', maxWidth: '150px', width: '100%' }}>Order ID </Box>
          <Box className={classes.heading10} sx={{ color: '#ffffff', fontWeight: '700', fontSize: '15px', lineHeight: '20px', maxWidth: '160px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>No. of Samples</Box>
        </Box>
        <Divider />
        <Box sx={{ border: 1, borderColor: '#CAD3E5', bgcolor: '#EBEFF5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '10px', maxWidth: 375 }}>
          <Box className={classes.heading} sx={{ color: '#2A3752', fontWeight: '400', fontSize: '15px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>1 [Order ID] </Box>
          <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', maxWidth: '150px', width: '100%' }}>
            <Box className={classes.heading} sx={{ color: '#455066', fontWeight: '400', fontSize: '13px', lineHeight: '16px', maxWidth: '211px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>[QTY]/ [Qty] </Box>

          </Box>
        </Box>
        <Box sx={{ border: 1, borderColor: '#CAD3E5', bgcolor: '#EBEFF5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '10px', maxWidth: 375 }}>
          <Box sx={{ display: 'flex' }}>
            <Box className={classes.heading} sx={{ color: '#2A3752', fontWeight: '400', fontSize: '15px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>2 QDE-CCM-0002
            </Box>
            <img src={alertimg} alt='' />
          </Box>
          <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', maxWidth: '150px', width: '100%' }}>
            <Box className={classes.heading} sx={{ color: '#455066', fontWeight: '400', fontSize: '13px', lineHeight: '16px', maxWidth: '211px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>[QTY]/ [Qty] </Box>
          </Box>
        </Box>
        <Box sx={{ border: 1, borderColor: '#CAD3E5', bgcolor: '#EBEFF5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '10px', maxWidth: 375 }}>
          <Box className={classes.heading} sx={{ color: '#2A3752', fontWeight: '400', fontSize: '15px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>3 QDE-CCM-0003 </Box>
          <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', maxWidth: '150px', width: '100%' }}>
            <Box className={classes.heading} sx={{ color: '#455066', fontWeight: '400', fontSize: '13px', lineHeight: '16px', maxWidth: '211px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>[QTY]/ [Qty] </Box>
          </Box>
        </Box>
        <Box sx={{ border: 1, borderColor: '#CAD3E5', bgcolor: '#EBEFF5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '10px', maxWidth: 375 }}>
          <Box className={classes.heading} sx={{ color: '#2A3752', fontWeight: '400', fontSize: '15px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>4 QDE-CCM-0004 </Box>
          <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', maxWidth: '150px', width: '100%' }}>
            <Box className={classes.heading} sx={{ color: '#455066', fontWeight: '400', fontSize: '13px', lineHeight: '16px', maxWidth: '211px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>[QTY]/ [Qty] </Box>
          </Box>
        </Box>
        <Box sx={{ bgcolor: '#EBEFF5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '6px', maxWidth: 375 }}>
          <Box sx={{ display: 'flex' }}>
            <Box className={classes.heading} sx={{ color: '#2A3752', fontWeight: '400', fontSize: '15px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>5 Non-eOrder
            </Box>
            <img src={alertimg} alt='' />
          </Box>  <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', maxWidth: '150px', width: '100%' }}>
            <Box className={classes.heading} sx={{ color: '#455066', fontWeight: '400', fontSize: '13px', lineHeight: '16px', maxWidth: '211px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>[QTY]/ [Qty] </Box>
          </Box>
        </Box>
        <Box className={classes.heading10} sx={{ textAlign: 'center', marginTop: '22px', fontWeight: '700', fontSize: '20px', lineHeight: '33.24px', color: '#054E8B' }}>Clinic Staff Confirmation</Box>
        <Box className={classes.heading} sx={{ textAlign: 'center', fontWeight: '400', fontSize: '13px', lineHeight: '16px', color: '#2A3752', marginBottom: '14px' }}>I declare that the above collection is correct and acceptable by [Clinic Name]</Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', ...commonStyles, border: 1, borderColor: '#1B96D8', }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} >
            <Box sx={{ textAlign: 'center', fontWeight: '400', fontSize: '13px', lineHeight: '16px', color: '#8493AE' }}> Sign within the box</Box>
            <Box className={classes.headfamily} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', fontWeight: '400', fontSize: '30px', lineHeight: '61.2px', color: '#054E8B' }}>  Clinic Staff Signs</Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '14px', maxWidth: '344px', width: '100%' }}>
            <Box className={classes.heading} sx={{ textAlign: 'center', fontWeight: '400', fontSize: '13px', lineHeight: '16px', color: '#455066' }}>Please indicate your name</Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px', maxWidth: '344px', width: '100%' }}>
            <CustomizedInputs /> </Box>
        </Box>
        <Box sx={{ maxWidth: '400px', marginTop: '12px', }} elevation='3'>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '43px', paddingLeft: '10px', paddingRight: '18px' }}>
            <Button disableRipple variant='text' sx={{ maxWidth: '86px', width: '100%', borderRadius: '10px', py: '10px', ':hover': { bgcolor: '#ffffff' } }} style={cancelbuttonStyle}>Cancel</Button>
            <Button disableRipple variant='text' sx={{ maxWidth: '86px', width: '100%', borderRadius: '8px', py: '10px', ':hover': { bgcolor: '#054E8B' } }} style={nextbuttonStyle}>Confirm</Button>
          </Box>
          <BottomNavigationScreen />
        </Box>
      </Box>
    </Grid >
  )
}
export default LogisticsSignature