import { Divider } from '@mui/material';
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import profile_img from '../Images/profile_img.svg';
import forward_btn from '../Images/forward_btn.svg';
import barcode_img from '../Images/barcode_img.svg';
import logout_btn from '../Images/logout_btn_img.svg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import BottomNavigationScreen from '../LogisticsModule/BottomNavigationScreen';
import { loginPageStyles } from "../LoginScreens/LoginStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import CustomizedSwitches from '../LogisticsModule/CustomizedSwitches';

const ProfileScreen = () => {

  let navigate = useNavigate();
  const settings_screen = () => { navigate('/settings'); };
  const go_to_login = () => { navigate('/login'); };
  const help_center_screen = () => { navigate('/help_center'); };
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => { setChecked(event.target.checked); };
  const theme = createTheme({ typography: { fontFamily: ['Mukta', 'sans-serif'].join(',') } });
  const staffTitle = { fontSize: '15px', fontWeight: '700', lineHeight: '20px', color: '#2A3752' };
  const staffTitle2 = { fontSize: '13px', fontWeight: '400', lineHeight: '20px', color: '#455066' };
  const staffName = { fontSize: '24px', fontWeight: '700', lineHeight: '31px', color: '#054E8B', marginBottom: '2px' };
  const profileStyle = { fontWeight: '700', fontSize: '21px', lineHeight: '27px', color: '#0F2853', marginBottom: '20px' }
  const employeeIdStyle = { fontWeight: '400', fontSize: '14px', color: '#2A3752', lineHeight: '19px' };
  const employeeIdStyle2 = { fontWeight: '400', fontSize: '12px', color: '#8493AE', lineHeight: '19px' }
  const profileSettingsStyle = { backgroundColor: '#054E8B', color: '#FAFAFA', fontWeight: '700', fontSize: '19px', lineHeight: '25px' };
  const profile_style = { fontWeight: '700', fontSize: '15px', lineHeight: '20px', color: '#455066' };

  const baseURL = "http://127.0.0.1:8000/profiledata";
  const classes = loginPageStyles();
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data)
      setPost(response.data);
    });
  }, [post]);
  if (!post) return null;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>

        <Grid >
          <Box sx={{ width: '100%', mt: '10px', display: 'flex', flexDirection: 'column' }}>
            <ThemeProvider theme={theme}> <Box sx={{ display: 'flex', justifyContent: 'center' }}> <Typography style={profileStyle} >Profile</Typography> </Box> </ThemeProvider>
            <Box>
              {post.map((data, index) => (
                <>
                  <Grid container justifyContent='center'>
                    <Box sx={{ maxWidth: '340px', width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                      <Box sx={{ maxWidth: '96px', width: '100%', display: 'flex' }}>  <img src={profile_img} alt='' /> </Box>
                      <Box sx={{ maxWidth: '219px', width: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Box className={classes.heading10} style={staffName}>{data.name}</Box>
                        <Box sx={{ mb: '4px', display: 'flex', flexDirection: 'row' }}>
                          <Box sx={{ mr: '7px' }} className={classes.heading10} style={staffTitle} >Staff ID</Box>
                          <Box className={classes.heading} style={staffTitle2} >{data.staffid}</Box>
                        </Box>
                        <Box sx={{ mb: '4px', display: 'flex', flexDirection: 'row' }}>
                          <Box sx={{ mr: '7px' }} className={classes.heading10} style={staffTitle} >Role</Box>
                          <Box className={classes.heading} style={staffTitle2} >{data.staffrole}</Box>
                        </Box>
                        <Box sx={{ mb: '4px', display: 'flex', flexDirection: 'row' }}>
                          <Box sx={{ mr: '7px' }} className={classes.heading10} style={staffTitle} >Vehicle</Box>
                          <Box className={classes.heading} style={staffTitle2} >{data.vehicletype}</Box>
                        </Box>
                        <Box sx={{ mb: '4px', display: 'flex', flexDirection: 'row' }}>
                          <Box sx={{ mr: '7px' }} className={classes.heading10} style={staffTitle} >Vehicle No</Box>
                          <Box className={classes.heading} style={staffTitle2} >{data.vehicleno}</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </>
              ))}
            </Box>
            <Box sx={{ px: '12px', py: '7px' }} className={classes.heading10} style={profileSettingsStyle}>Profile Settings </Box>
            <Box sx={{ pl: '20px', pr: '-20px', py: '2px', display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <Box className={classes.heading10} style={profile_style}> Link Waze</Box>
              </Box>
              <CustomizedSwitches />
            </Box>
            <Divider />
            <Box sx={{ pl: '20px', pr: '0px', py: '2px', display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <Box className={classes.heading10} style={profile_style}> Notifications</Box>
              </Box>
              <CustomizedSwitches />
            </Box>
            <Divider />
            <Box sx={{ pl: '20px', pr: '12px', py: '5px', display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box className={classes.heading10} style={profile_style}>Delivery Overview </Box>
              </Box>
              <img src={forward_btn} alt='' style={{ width: '26px' }} />
            </Box>
            <Divider />
            <Box sx={{ pl: '20px', pr: '12px', py: '5px', display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box className={classes.heading10} style={profile_style}>Change Password</Box>
              </Box>
              <img src={forward_btn} alt='' style={{ width: '26px' }} />
            </Box>
            <Divider />
            <Box onClick={settings_screen} sx={{ pl: '20px', pr: '12px', py: '5px', display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box className={classes.heading10} style={profile_style}>Settings</Box>
              </Box>
              <img src={forward_btn} alt='' style={{ width: '26px' }} />
            </Box>
            <Divider />
            <Box onClick={help_center_screen} sx={{ pl: '20px', pr: '12px', py: '5px', display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box className={classes.heading10} style={profile_style}>Help Center</Box>
              </Box>
              <img src={forward_btn} alt='' style={{ width: '26px' }} />
            </Box>
            <Divider />
            <Box onClick={go_to_login} sx={{ pl: '20px', pr: '17px', py: '5px', display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box className={classes.heading10} style={profile_style}>Log Out</Box>
              </Box>
              <img src={logout_btn} alt='' style={{ width: '25px' }} />
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}> <img src={barcode_img} alt='' /></Box>
            <Box sx={{ alignItems: 'center', alignContent: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
              <Box sx={{ mr: '10px' }} className={classes.heading} style={employeeIdStyle}>[Staff ID] </Box>
              <Box className={classes.heading} style={employeeIdStyle2}> [Staff Name]</Box>  </Box>
            <Box sx={{ width: '100%', mt: '20px' }} elevation='3'>
              <Box position='fixed' sx={{ bottom: 0, width: { xs: '100%', sm: '100%', md: '100%', lg: '100%' }, }}>
                <BottomNavigationScreen />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container >
    </React.Fragment >
  );
}
export default ProfileScreen