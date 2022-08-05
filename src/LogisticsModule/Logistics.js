import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import { loginPageStyles } from "../LoginScreens/LoginStyles";
import FilterListIcon from '@mui/icons-material/FilterList';
import BottomNavigationScreen from './BottomNavigationScreen';
import TabsCustomization from './TabsCustomization';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import search_icon from '../Images/search_icon.svg'

export default function Logistics() {

  const classes = loginPageStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        <div>
          <Grid paddingLeft='-100px' disableGutters>
            <Box sx={{ width: '100%' }} disableGutters>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'row', alignContent: 'center', }} >
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'row', alignContent: 'center', marginRight: '14px' }} >
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignContent: 'center' }} > </Box>
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start', alignContent: 'center', alignItems: 'center' }} >
                    <Box className={classes.heading10} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', color: '#0F2853', fontWeight: '700', fontSize: '21px', lineHeight: '27px' }} > Logistics</Box>
                  </Box>
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignContent: 'center', alignItems: 'center' }} >
                    <Box className={classes.heading} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', color: '#8493AE', fontSize: '13px', fontWeight: '400', paddingTop: '14px', lineHeight: '16px', marginBottom: '10px' }} >[Route name] </Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', marginRight: '14px', width: '100%' }}>
                <Box sx={{ display: "flex", alignItems: "center", border: 1, borderRadius: '3px', marginLeft: '12px', p: '1px', borderColor: '#DAE0EB', width: { xs: 300, md: '100%', sm: 475, lg: '100%' } }}  >
                  <img src={search_icon} alt='' style={{ width: '30px', paddingBottom: '1px', paddingTop: '1px', paddingLeft: '4px', paddingRight: '3px' }} />
                  <TextField variant="standard" placeholder='Search [Section]' sx={{
                    display: 'flex', alignItems: 'center',
                    '& .MuiInput-input': { fontSize: '16px', width: '100%', lineHeight: '21px', fontWeight: '400', fontFamily: 'Sans', ml: '8px' }
                  }} InputProps={{ disableUnderline: true }} />
                </Box>
                <FilterListIcon color="action" sx={{ fontSize: '37px' }} />
              </Box>
              <TabsCustomization />
              <Box position='fixed' sx={{ bottom: 0, mt: '20px', width: '100%' }}>
                <BottomNavigationScreen />
              </Box>
            </Box>
          </Grid>
        </div>
      </Container >
    </React.Fragment >
  );
};
