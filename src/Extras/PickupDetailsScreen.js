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

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const PickupDetailsScreen = () => {
  const classes = loginPageStyles();
  const theme = createTheme({ typography: { fontFamily: ['Mukta', 'sans-serif'].join(',') } });
  const titleStyle = { textAlign: 'right', width: '150px', fontSize: '19px', lineHeight: '25px', fontWeight: '700', color: '#111111' };
  const buttonStyle = { width: '100%', maxWidth: '150px', textAlign: 'center', display: 'flex', backgroundColor: '#FAFAFA', textTransform: 'none', fontSize: '15px', color: '#2A3752', fontWeight: '700', lineHeight: '20px' };
  const refreshStyle = { width: '100%', maxWidth: '100px', textAlign: 'center', display: 'flex', backgroundColor: '#FAFAFA', textTransform: 'none', fontSize: '13px', color: '#455066', fontWeight: '400', lineHeight: '16px' };
  const nextbuttonStyle = { backgroundColor: '#054E8B', textTransform: 'capitalize', fontSize: '15px', color: '#FFFFFF', fontWeight: '700', lineHeight: '20px' };
  const cancelbuttonStyle = { backgroundColor: '#FAFAFA', textTransform: 'capitalize', fontSize: '15px', color: '#EA4C59', fontWeight: '400', lineHeight: '24.93px' };
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
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box className={classes.heading10} sx={{ textAlign: 'left', marginBottom: '10px', marginTop: '20px', fontWeight: '700', fontSize: '17px', lineHeight: '22px', color: '#054E8B' }}>[Clinic Name]</Box>
          <Box className={classes.heading} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button className={classes.heading} disableRipple variant='text' sx={{ border: 1, borderColor: '#E5E5E5', textAlign: 'center', marginTop: '12px', marginBottom: '16px', maxWidth: '148px', width: '100%', borderRadius: '99px', px: '6px', py: '0px', ':hover': { bgcolor: '#ffffff' } }} style={refreshStyle}>Refresh list</Button>
          </Box>
        </Box>
        <Box sx={{ bgcolor: '#054E8B', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '6px', maxWidth: 375 }}>
          <Box className={classes.heading10} sx={{ color: '#ffffff', fontWeight: '700', fontSize: '15px', lineHeight: '20px', maxWidth: '150px', width: '100%' }}>Order ID </Box>
          <Box className={classes.heading10} sx={{ color: '#ffffff', fontWeight: '700', fontSize: '15px', lineHeight: '20px', maxWidth: '160px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>No. of Samples</Box>
        </Box>
        <Divider />
        <Box sx={{ border: 1, borderColor: '#CAD3E5', bgcolor: '#FAFAFA', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '6px', maxWidth: 375 }}>
          <Box className={classes.heading} sx={{ color: '#2A3752', fontWeight: '400', fontSize: '15px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>1 [Order ID] </Box>
          <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', maxWidth: '150px', width: '100%' }}>
            <Box className={classes.heading} sx={{ color: '#455066', fontWeight: '400', fontSize: '13px', lineHeight: '16px', maxWidth: '211px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>[QTY] </Box>
            <Checkbox {...label} />
          </Box>
        </Box>
        <Box sx={{ border: 1, borderColor: '#CAD3E5', bgcolor: '#FAFAFA', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '6px', maxWidth: 375 }}>
          <Box sx={{ display: 'flex' }}>
            <Box className={classes.heading} sx={{ color: '#2A3752', fontWeight: '400', fontSize: '15px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>2 QDE-CCM-0002
            </Box>
            <img src={alertimg} alt='' />
          </Box>
          <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', maxWidth: '150px', width: '100%' }}>
            <Box className={classes.heading} sx={{ color: '#455066', fontWeight: '400', fontSize: '13px', lineHeight: '16px', maxWidth: '211px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>4 </Box>
            <Checkbox {...label} />
          </Box>
        </Box>
        <Box sx={{ border: 1, borderColor: '#CAD3E5', bgcolor: '#FAFAFA', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '6px', maxWidth: 375 }}>
          <Box className={classes.heading} sx={{ color: '#2A3752', fontWeight: '400', fontSize: '15px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>3 [Order ID] </Box>
          <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', maxWidth: '150px', width: '100%' }}>
            <Box className={classes.heading} sx={{ color: '#455066', fontWeight: '400', fontSize: '13px', lineHeight: '16px', maxWidth: '211px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>[QTY] </Box>
            <Checkbox {...label} />
          </Box>
        </Box>
        <Box sx={{ border: 1, borderColor: '#CAD3E5', bgcolor: '#FAFAFA', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '6px', maxWidth: 375 }}>
          <Box className={classes.heading} sx={{ color: '#2A3752', fontWeight: '400', fontSize: '15px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>4 [Order ID]</Box>
          <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', maxWidth: '150px', width: '100%' }}>
            <Box className={classes.heading} sx={{ color: '#455066', fontWeight: '400', fontSize: '13px', lineHeight: '16px', maxWidth: '211px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>[QTY] </Box>
            <Checkbox {...label} />
          </Box>
        </Box>
        <Box sx={{ bgcolor: '#FAFAFA', display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: '6px', maxWidth: 375 }}>
          <Box sx={{ display: 'flex' }}>
            <Box className={classes.heading} sx={{ color: '#2A3752', fontWeight: '400', fontSize: '15px', lineHeight: '19px', maxWidth: '150px', width: '100%' }}>5 Non-eOrder
            </Box>
            <img src={alertimg} alt='' />
          </Box>  <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', maxWidth: '150px', width: '100%' }}>
            <Box className={classes.heading} sx={{ color: '#455066', fontWeight: '400', fontSize: '13px', lineHeight: '16px', maxWidth: '211px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>[QTY] </Box>
            <Checkbox {...label} />
          </Box>
        </Box>
        <Divider />
        <Box className={classes.heading} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button className={classes.heading} disableRipple variant='text' sx={{ border: 1, borderColor: '#E5E5E5', textAlign: 'center', marginTop: '12px', marginBottom: '16px', maxWidth: '148px', py: '10px', width: '100%', borderRadius: '8px', ':hover': { bgcolor: '#ffffff' } }} style={buttonStyle}>Add Non-eOrder</Button>
        </Box>
        <Box className={classes.heading} sx={{ marginTop: '10px', marginBottom: '137px', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '12px', color: '#455066', lineHeight: '15px', textAlign: 'center' }}>Please ensure you have checked that the samples and quantity are correct.</Box>
        <Box sx={{ maxWidth: '400px', }} elevation='3'>
          <Box sx={{ px: '20px', display: 'flex', justifyContent: 'space-between', marginBottom: '26px' }}>
            <Button disableRipple variant='text' sx={{ maxWidth: '72px', width: '100%', borderRadius: '10px', py: '10px', ':hover': { bgcolor: '#ffffff' } }} style={cancelbuttonStyle}>Cancel</Button>
            <Button disableRipple variant='text' sx={{ maxWidth: '72px', width: '100%', borderRadius: '8px', py: '5px', ':hover': { bgcolor: '#054E8B' } }} style={nextbuttonStyle}>Next</Button>
          </Box>
          <BottomNavigationScreen />
        </Box>
      </Box>
    </Grid >
  )
}
export default PickupDetailsScreen