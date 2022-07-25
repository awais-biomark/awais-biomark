import { Divider } from '@mui/material';
import profile_img from '../Images/profile_img.svg';
import forward_btn from '../Images/forward_btn.svg';
import barcode_img from '../Images/barcode_img.svg';
import logout_btn from '../Images/logout_btn_img.svg';
import Switch from '@mui/material/Switch';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RestoreIcon from '@mui/icons-material/Restore';
import { useNavigate } from 'react-router-dom';

const ProfileScreen = () => {

  let navigate = useNavigate();
  const settings_screen = () => { navigate('/settings'); };
  const go_to_login = () => { navigate('/login'); };
  const help_center_screen = () => { navigate('/help_center'); };
  const [value, setValue] = React.useState(0);
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => { setChecked(event.target.checked); };
  const theme = createTheme({ typography: { fontFamily: ['Mukta', 'sans-serif'].join(',') } });
  const staffTitle = { fontSize: '15px', fontWeight: '700', lineHeight: '18px', color: '#2A3752', marginBottom: '4px' };
  const staffText = { fontSize: '15px', fontWeight: '700', lineHeight: '20px', color: '#455066', marginBottom: '4px' };
  const staffName = { fontSize: '24px', fontWeight: '700', lineHeight: '31px', color: '#054E8B', marginBottom: '2px' };
  const profileStyle = { marginTop: '20px', fontWeight: '700', fontSize: '25px', lineHeight: '41px', color: '#2A3752', marginBottom: '7px' }
  const employeeIdStyle = { fontWeight: '700', fontSize: '15px', color: '#2A3752', lineHeight: '25px' }
  const profileSettingsStyle = { marginTop: '10px', paddingBottom: '4px', paddingTop: '4px', paddingLeft: '8px', backgroundColor: '#054E8B', color: '#FAFAFA', fontWeight: '700', fontSize: '21px', lineHeight: '27px' };
  const profile_style = { fontWeight: '700', fontSize: '17px', lineHeight: '22px', color: '#455066' };
  const version_style = { fontWeight: '400', fontSize: '13px', color: '#8493AE', lineHeight: '16px' };
  const staffTitleValue = { fontWeight: '400', fontSize: '15px', lineHeight: '19px', color: '#2A3752' }
  const divStyle = { backgroundColor: '#ffffff', paddingTop: '8px', paddingBottom: '8px' };

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' height='100%'>
      <Box sx={{ maxWidth: '375px', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <ThemeProvider theme={theme}> <Box sx={{ display: 'flex', justifyContent: 'center' }}> <Typography style={profileStyle} >Profile</Typography> </Box> </ThemeProvider>
        <Grid container justifyContent='center'>
          <Box sx={{ maxWidth: '340px', width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
            <Box sx={{ maxWidth: '96px', width: '100%', display: 'flex' }}>  <img src={profile_img} alt='' /> </Box>
            <Box sx={{ maxWidth: '219px', width: '100%', display: 'flex', flexDirection: 'column' }}>
              <ThemeProvider theme={theme}> <Box> <Typography style={staffName}>Nivek Lim</Typography> </Box> </ThemeProvider>
              <ThemeProvider theme={theme}> <Box sx={{ display: 'flex', flexDirection: 'row' }}> <Typography style={staffTitle} >Staff ID</Typography>
                <Box sx={{ marginRight: '8px' }}></Box> <Typography style={staffTitleValue}>[Value]</Typography> </Box>
              </ThemeProvider>
              <ThemeProvider theme={theme}> <Box sx={{ display: 'flex', flexDirection: 'row' }}> <Typography style={staffText}>Staff Role</Typography>
                <Box sx={{ marginRight: '8px' }}></Box><Typography style={staffTitleValue}>[Value]</Typography> </Box>
              </ThemeProvider>
              <ThemeProvider theme={theme}> <Box sx={{ display: 'flex', flexDirection: 'row' }}> <Typography style={staffText}>Vehicle Type</Typography>
                <Box sx={{ marginRight: '8px' }}></Box> <Typography style={staffTitleValue}>[Value]</Typography> </Box>
              </ThemeProvider>
              <ThemeProvider theme={theme}> <Box sx={{ display: 'flex', flexDirection: 'row' }}>  <Typography style={staffText}>Vehicle No</Typography>
                <Box sx={{ marginRight: '8px' }}></Box> <Typography style={staffTitleValue}>[Value]</Typography></Box>
              </ThemeProvider>
            </Box>
          </Box>
        </Grid>
        <ThemeProvider theme={theme}> <Box> <Typography style={profileSettingsStyle}>Profile Settings</Typography> </Box> </ThemeProvider>
        <Box sx={{ paddingLeft: '7px', paddingRight: '7px', display: 'flex', justifyContent: 'space-between' }}>
          <ThemeProvider theme={theme}> <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            <Typography style={profile_style}>Link Waze</Typography> </Box>
          </ThemeProvider>
          <Switch checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
        </Box>
        <Divider />
        <Box sx={{ paddingLeft: '7px', paddingRight: '7px', display: 'flex', justifyContent: 'space-between' }}>
          <ThemeProvider theme={theme}> <Box sx={{ display: 'flex', alignItems: 'center' }}> <Typography style={profile_style}>Delivery Overview</Typography> </Box> </ThemeProvider>
          <img src={forward_btn} alt='' />
        </Box>
        <Divider />
        <Box sx={{ paddingLeft: '7px', paddingRight: '7px', display: 'flex', justifyContent: 'space-between' }}>
          <ThemeProvider theme={theme}> <Box sx={{ display: 'flex', alignItems: 'center' }}> <Typography style={profile_style}>Change Password</Typography> </Box> </ThemeProvider>
          <img src={forward_btn} alt='' />
        </Box>
        <Divider />
        <Box onClick={settings_screen} sx={{ paddingLeft: '7px', paddingRight: '7px', display: 'flex', justifyContent: 'space-between' }}>
          <ThemeProvider theme={theme}> <Box sx={{ display: 'flex', alignItems: 'center' }}> <Typography style={profile_style}>Settings</Typography> </Box> </ThemeProvider>
          <img src={forward_btn} alt='' />
        </Box>
        <Divider />
        <Box onClick={help_center_screen} sx={{ paddingLeft: '7px', paddingRight: '7px', display: 'flex', justifyContent: 'space-between' }}>
          <ThemeProvider theme={theme}> <Box sx={{ display: 'flex', alignItems: 'center' }}> <Typography style={profile_style}>Help Center</Typography> </Box> </ThemeProvider>
          <img src={forward_btn} alt='' />
        </Box>
        <Divider />
        <Box onClick={go_to_login} sx={{ paddingLeft: '7px', paddingRight: '7px', display: 'flex', justifyContent: 'space-between', marginBottom: '46px' }}>
          <ThemeProvider theme={theme}> <Box sx={{ display: 'flex', alignItems: 'center' }}> <Typography style={profile_style}>Log Out</Typography> </Box>
          </ThemeProvider> <img src={logout_btn} alt='' /> </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}> <img src={barcode_img} alt='' /></Box>
        <ThemeProvider theme={theme}> <Box sx={{ marginTop: '14px', display: 'flex', justifyContent: 'center' }}> <Typography style={employeeIdStyle}>  Nivek Lim's Employee ID</Typography> </Box> </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Box sx={{ marginTop: '9px', marginBottom: '24px', display: 'flex', justifyContent: 'center' }}> <Typography style={version_style}> Version 1.0 </Typography> </Box>
        </ThemeProvider>
        <Grid container justifyContent='center'>
          <Box sx={{ width: '375px', display: 'flex', justifyContent: 'center' }}>
            <BottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue); }} style={divStyle}>
              <BottomNavigationAction label="Logistics" icon={<LocalShippingIcon sx={{ marginBottom: '4px', color: '#8493AE', fontSize: '30px' }} />} />
              <Box sx={{ marginRight: '30px' }}></Box>
              <BottomNavigationAction label="History" icon={<RestoreIcon sx={{ marginBottom: '5px', fontSize: '30px' }} />} />
              <Box sx={{ marginRight: '30px' }}></Box>
              <BottomNavigationAction label="Profile" icon={<AccountCircleIcon sx={{ color: '#8493AE', marginBottom: '5px', fontSize: '30px' }} />} />
            </BottomNavigation>
          </Box>
        </Grid>
      </Box>
    </Grid>
  )
}
export default ProfileScreen