import * as React from 'react';
import Box from '@mui/material/Box';
import CallIcon from '@mui/icons-material/Call';
import TextField from "@mui/material/TextField";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Button, Divider, Tabs } from '@mui/material';
import alertimg from '../Images/alertimg.svg'
import erroralert from '../Images/erroralert.svg'
import dropdownarrow from '../Images/dropdownarrow.svg'
import { Tab } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import { loginPageStyles } from "../Screens/LoginStyles";
import FilterListIcon from '@mui/icons-material/FilterList';
import BottomNavigationScreen from './BottomNavigationScreen';

export default function LogisticsCollected() {
  const classes = loginPageStyles();
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => { setValue(newValue); };
  const buttonStyle = { backgroundColor: '#ffffff', textTransform: "capitalize", color: '#455066', fontSize: '9px', fontWeight: '400', lineHeight: '11px' };
  const tabStyle = { textColor: '#F2F4F7', padding: '0px' }
  const setwidthTabs = { maxWidth: `${'40px'} !important` };
  const theme = createMuiTheme({
    overrides: {
      MuiTabs: {},
      MuiTab: {
        root: { "&$selected": { backgroundColor: '#054E8B', color: `${'#ffffff'} !important`, maxWidth: '140px', paddingLeft: '30px', paddingRight: '30px' } },
        MuiButton: {
          maxWidth: '20px',
          width: '100%'
        },
      },
    }
  });

  return (
    <div>
      <Grid container justifyContent="center" >
        <Box sx={{ width: '100%', maxWidth: '375px' }}>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'row', alignContent: 'center', }} >
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'row', alignContent: 'center', marginRight: '14px' }} >
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignContent: 'center' }} > </Box>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start', alignContent: 'center', alignItems: 'center' }} >
                <Box className={classes.heading10} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', color: '#111111', fontWeight: '700', fontSize: '21px', lineHeight: '27px' }} > Logistics</Box>
              </Box>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignContent: 'center', alignItems: 'center' }} >
                <Box className={classes.heading} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', color: '#8493AE', fontSize: '13px', fontWeight: '400', paddingTop: '14px', lineHeight: '16px', marginBottom: '10px' }} >[Route name] </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', marginRight: '14px' }}>
            <Box sx={{ display: "flex", alignItems: "center", border: 1, borderRadius: '3px', width: 300, marginLeft: '12px', borderColor: '#DAE0EB' }}  >
              <SearchIcon sx={{ color: "#DADADA", display: 'flex', alignItems: 'center', paddingBottom: '5px', paddingTop: '5px', paddingLeft: '8px', borderColor: '#DADADA', paddingRight: '7px' }} />
              <TextField variant="standard" placeholder='Search [Section]'
                sx={{ display: 'flex', alignItems: 'center' }} InputProps={{ disableUnderline: true }} />
            </Box>
            <FilterListIcon color="action" sx={{ fontSize: '37px' }} />
          </Box>
          <MuiThemeProvider theme={theme}>
            <Box sx={{ width: '100%', maxWidth: '400px', display: 'flex', justifyContent: 'center' }}>
              <Tabs scrollButtons={false} value={value} onChange={handleChange} aria-label="secondary tabs example" style={tabStyle}>
                <Tab value="one" label="PickUp" style={setwidthTabs} />
                <Tab value="two" label="Collection" style={setwidthTabs} />
                <Tab value="three" label="Delivered" style={setwidthTabs} />
              </Tabs>
            </Box>
          </MuiThemeProvider>
          <Box sx={{ bgcolor: 'background.paper', maxWidth: '360px', width: '100%', display: 'flex', direction: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
            <Box sx={{ paddingLeft: '10px', paddingRight: '7px', color: '#111111', display: 'inline', fontWeight: '700', fontSize: '25px', lineHeight: '41px', marginTop: '9px', width: '100%' }}>
              <Box className={classes.heading10} sx={{ marginBottom: '8px', color: '#000000', fontWeight: '700', fontSize: '17px', lineHeight: '22px', display: 'flex', alignItems: 'center' }}>
                [Clinic Name]
                <Box sx={{ mx: '5px' }}></Box>
                <img src={erroralert} alt='' style={{ width: '22px', height: '22px' }} />
                <Box sx={{ mx: '5px' }}></Box>
                <Box className={classes.heading} sx={{ color: '#8493AE', fontWeight: '400', fontSize: '13px', lineHeight: '16px' }}>[distance]</Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <CallIcon sx={{ fontSize: 19, marginRight: '7px', color: '#8493AE' }} />
                  <Box className={classes.heading} sx={{ fontSize: '13px', fontWeight: '400', lineHeight: '16px', color: '#455066' }}> [Clinic Phone]</Box>
                </Box>
                <Button variant='text' sx={{ width: '64px', height: '11px', borderRadius: '12px', border: 1, borderColor: '#8493AE' }} style={buttonStyle}>Assigned</Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{ color: '#111111', fontWeight: '400', fontSize: '15px', display: 'flex', marginTop: '10px', maxHeight: '20px', marginBottom: '16px', justifyContent: 'center', lineHeight: '18px', width: '100%' }}>
            <img src={dropdownarrow} alt='' />
          </Box>
          <Divider />

          <Box sx={{ bgcolor: 'background.paper', maxWidth: '360px', width: '100%', display: 'flex', direction: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
            <Box sx={{ paddingLeft: '10px', paddingRight: '7px', color: '#111111', display: 'inline', fontWeight: '700', fontSize: '25px', lineHeight: '41px', marginTop: '9px', width: '100%' }}>
              <Box className={classes.heading10} sx={{ marginBottom: '8px', color: '#000000', fontWeight: '700', fontSize: '17px', lineHeight: '22px', display: 'flex', alignItems: 'center' }}>
                [Clinic Name]
                <Box sx={{ mx: '5px' }}></Box>
                <img src={erroralert} alt='' style={{ width: '22px', height: '22px' }} />
                <Box sx={{ mx: '5px' }}></Box>
                <Box className={classes.heading} sx={{ color: '#8493AE', fontWeight: '400', fontSize: '13px', lineHeight: '16px' }}>[distance]</Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <CallIcon sx={{ fontSize: 19, marginRight: '7px', color: '#8493AE' }} />
                  <Box className={classes.heading} sx={{ fontSize: '13px', fontWeight: '400', lineHeight: '16px', color: '#455066' }}> [Clinic Phone]</Box>
                </Box>
                <Button variant='text' sx={{ width: '64px', height: '11px', borderRadius: '12px', border: 1, borderColor: '#8493AE' }} style={buttonStyle}>Assigned</Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{ color: '#111111', fontWeight: '400', fontSize: '15px', display: 'flex', marginTop: '10px', maxHeight: '20px', marginBottom: '16px', justifyContent: 'center', lineHeight: '18px', width: '100%' }}>
            <img src={dropdownarrow} alt='' />
          </Box>
          <Divider />
          <Box sx={{ bgcolor: 'background.paper', maxWidth: '360px', width: '100%', display: 'flex', direction: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
            <Box sx={{ paddingLeft: '10px', paddingRight: '7px', color: '#111111', display: 'inline', fontWeight: '700', fontSize: '25px', lineHeight: '41px', marginTop: '9px', width: '100%' }}>
              <Box className={classes.heading10} sx={{ marginBottom: '8px', color: '#000000', fontWeight: '700', fontSize: '17px', lineHeight: '22px', display: 'flex', alignItems: 'center' }}>
                [Clinic Name]
                <Box sx={{ mx: '5px' }}></Box>
                <img src={erroralert} alt='' style={{ width: '22px', height: '22px' }} />
                <Box sx={{ mx: '5px' }}></Box>
                <Box className={classes.heading} sx={{ color: '#8493AE', fontWeight: '400', fontSize: '13px', lineHeight: '16px' }}>[distance]</Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <CallIcon sx={{ fontSize: 19, marginRight: '7px', color: '#8493AE' }} />
                  <Box className={classes.heading} sx={{ fontSize: '13px', fontWeight: '400', lineHeight: '16px', color: '#455066' }}> [Clinic Phone]</Box>
                </Box>
                <Button variant='text' sx={{ width: '64px', height: '11px', borderRadius: '12px', border: 1, borderColor: '#8493AE' }} style={buttonStyle}>Assigned</Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{ color: '#111111', fontWeight: '400', fontSize: '15px', display: 'flex', marginTop: '10px', maxHeight: '20px', marginBottom: '16px', justifyContent: 'center', lineHeight: '18px', width: '100%' }}>
            <img src={dropdownarrow} alt='' />
          </Box>
          <Divider />
          <Box sx={{ bgcolor: 'background.paper', maxWidth: '360px', width: '100%', display: 'flex', direction: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
            <Box sx={{ paddingLeft: '10px', paddingRight: '7px', color: '#111111', display: 'inline', fontWeight: '700', fontSize: '25px', lineHeight: '41px', marginTop: '9px', width: '100%' }}>
              <Box className={classes.heading10} sx={{ marginBottom: '8px', color: '#000000', fontWeight: '700', fontSize: '17px', lineHeight: '22px', display: 'flex', alignItems: 'center' }}>
                [Clinic Name]
                <Box sx={{ mx: '5px' }}></Box>
                <img src={erroralert} alt='' style={{ width: '22px', height: '22px' }} />
                <Box sx={{ mx: '5px' }}></Box>
                <Box className={classes.heading} sx={{ color: '#8493AE', fontWeight: '400', fontSize: '13px', lineHeight: '16px' }}>[distance]</Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <CallIcon sx={{ fontSize: 19, marginRight: '7px', color: '#8493AE' }} />
                  <Box className={classes.heading} sx={{ fontSize: '13px', fontWeight: '400', lineHeight: '16px', color: '#455066' }}> [Clinic Phone]</Box>
                </Box>
                <Button variant='text' sx={{ width: '64px', height: '11px', borderRadius: '12px', border: 1, borderColor: '#8493AE' }} style={buttonStyle}>Assigned</Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{ color: '#111111', fontWeight: '400', fontSize: '15px', display: 'flex', marginTop: '10px', maxHeight: '20px', marginBottom: '16px', justifyContent: 'center', lineHeight: '18px', width: '100%' }}>
            <img src={dropdownarrow} alt='' />
          </Box>
          <Divider />
          <Box sx={{ maxWidth: '375px', bgcolor: '#111111', marginTop: '145px', boxShadow: '1 ' }}>
            <BottomNavigationScreen />
          </Box>
        </Box>
      </Grid>
    </div >
  );
}; 