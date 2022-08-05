import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import { loginPageStyles } from "../LoginScreens/LoginStyles";
import FilterListIcon from '@mui/icons-material/FilterList';
import BottomNavigationScreen from './BottomNavigationScreen';
import LogisticsCollectedAxiosData from './LogisticsCollectedAxiosData';

export default function LogisticsCollected() {
  const classes = loginPageStyles();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container  >
          <Grid xs={12}>
            <Box sx={{ width: '100%' }}>
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
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', marginRight: '14px', width: '100%' }}>
                <Box sx={{ display: "flex", alignItems: "center", border: 1, borderRadius: '3px', maxWidth: '300px', width: '100%', marginLeft: '12px', borderColor: '#DAE0EB' }}  >
                  <SearchIcon sx={{ color: "#DADADA", display: 'flex', alignItems: 'center', paddingBottom: '5px', paddingTop: '5px', paddingLeft: '8px', borderColor: '#DADADA', paddingRight: '7px' }} />
                  <TextField variant="standard" placeholder='Search [Section]'
                    sx={{
                      display: 'flex', alignItems: 'center',
                      '& .MuiInput-input': { fontSize: '17px', lineHeight: '21px', fontWeight: '400', fontFamily: 'Mulish' }
                    }} InputProps={{ disableUnderline: true }} />
                </Box>
                <FilterListIcon color="action" sx={{ fontSize: '37px' }} />
              </Box>
              <LogisticsCollectedAxiosData />
              <Box position="fixed" sx={{ width: { xs: '100%', sm: '100%', md: '100%', lg: '100%' }, bottom: 0, bgcolor: '#111111', boxShadow: '1 ' }}>
                <BottomNavigationScreen />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}; 