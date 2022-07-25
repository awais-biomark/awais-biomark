import { Divider } from '@mui/material';
import { Typography } from "@material-ui/core";
import forward_btn from '../Images/forward_settings_img.svg';
import back_icon from '../Images/backicon.svg';
import delivery from '../Images/delivery.png'
import EventNoteIcon from '@mui/icons-material/EventNote';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

const SettingScreen = () => {
  let navigate = useNavigate();
  const back_to_main = () => { navigate('/profile'); };
  const [value, setValue] = React.useState(0);
  const theme = createTheme({ typography: { fontFamily: ['Mulish'].join(',') }, });
  const profileStyle = { fontWeight: '700', fontSize: '25px', lineHeight: '41px', color: '#2A3752', marginBottom: '7px' }
  const profileSettingsStyle = { marginTop: '10px', paddingBottom: '4px', paddingTop: '4px', paddingLeft: '16px', backgroundColor: '#054E8B', color: '#FAFAFA', fontWeight: '700', fontSize: '20px', lineHeight: '33px' };
  const profile_style = { fontWeight: '400', fontSize: '15px', lineHeight: '18.83px', color: '#2A3752' };
  const version_style = { fontWeight: '400', fontSize: '13px', color: '#8493AE', lineHeight: '16px' };
  const divStyle = { backgroundColor: '#F2F4F7', paddingTop: '22px', paddingBottom: '22px', width: '375px' };

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' height='100%'>
      <Box sx={{ maxWidth: '375px', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <Grid container direction='row' justifyContent='flex-start'>
          <Grid container direction='row' justifyContent='space-between' maxWidth='238px' marginBottom='37px'>
            <Box onClick={back_to_main} sx={{ display: 'flex', justifyContent: 'flex-start', alignContent: 'flex-start', fontWeight: '400', fontSize: '13px', lineHeight: '16px', color: '#000000', flexDirection: 'row' }}>
              <Box sx={{ cursor: 'pointer', display: 'flex', alignContent: 'center', alignItems: 'center', marginTop: '3px', fontWeight: '400', fontSize: '13px', lineHeight: '16px', color: '#000000' }}>
                <Box> <img src={back_icon} alt='' /> </Box>Back</Box></Box>
            <Box sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Typography style={profileStyle} >Settings</Typography></Box>
          </Grid>
        </Grid>
        <ThemeProvider theme={theme}> <Box> <Typography style={profileSettingsStyle}>App Settings</Typography> </Box> </ThemeProvider><Divider />
        <Box sx={{ paddingTop: '6px', paddingBottom: '6px', paddingLeft: '17px', paddingRight: '7px', display: 'flex', justifyContent: 'space-between' }}>
          <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}> <Typography style={profile_style}>Email</Typography> </Box>
          </ThemeProvider> <img src={forward_btn} alt='' /> </Box>
        <Divider />
        <Box sx={{ paddingTop: '6px', paddingBottom: '6px', paddingLeft: '17px', paddingRight: '7px', display: 'flex', justifyContent: 'space-between' }}>
          <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}> <Typography style={profile_style}>Driving mode</Typography> </Box>
          </ThemeProvider> <img src={forward_btn} alt='' /> </Box>
        <Divider />
        <Box sx={{ paddingTop: '6px', paddingBottom: '6px', paddingLeft: '17px', paddingRight: '7px', display: 'flex', justifyContent: 'space-between' }}>
          <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}> <Typography style={profile_style}>Driver license</Typography> </Box>
          </ThemeProvider> <img src={forward_btn} alt='' /> </Box>
        <Divider />
        <Box sx={{ paddingTop: '6px', paddingBottom: '6px', paddingLeft: '17px', paddingRight: '7px', display: 'flex', justifyContent: 'space-between' }}>
          <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}> <Typography style={profile_style}>Alarms</Typography> </Box>
          </ThemeProvider> <img src={forward_btn} alt='' /> </Box>
        <Divider />
        <ThemeProvider theme={theme}>
          <Box sx={{ marginTop: '387px', marginBottom: '14px', display: 'flex', justifyContent: 'center' }}> <Typography style={version_style}>Version 1.0 </Typography> </Box>
        </ThemeProvider>
        <Grid container justifyContent='center'>
          <Box sx={{ maxWidth: '375px', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Paper elevation={3} >
              <Box sx={{ maxWidth: '400px', bgcolor: '#111111' }}>
                <BottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue); }} style={divStyle}>
                  <BottomNavigationAction label="Pickups" icon={<img src={delivery} alt='' width='28px' height='27px' />} />
                  <BottomNavigationAction label="Schedule" icon={<EventNoteIcon />} />
                  <BottomNavigationAction label="History" icon={<RestoreIcon />} />
                  <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
                </BottomNavigation>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Box>
    </Grid>
  )
}

export default SettingScreen