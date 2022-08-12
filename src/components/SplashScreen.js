import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import biomark_text_splash from 'assets/icons/biomark_text_splash.svg';
import biomark_logo_splash from 'assets/icons/biomark_logo_splash.svg';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const SplashScreen = () => {
  const theme = createTheme({ typography: { fontFamily: ['Mukta', 'sans-serif'].join(',') }, });
  const titleStyle = { fontSize: '21px', lineHeight: '27px', fontWeight: '700', color: '#2A3752' };
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' height='100%'>
      <Grid container direction='column' justifyContent='center' alignItems='center'>
        <Box sx={{ marginBottom: '22px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}> <img src={biomark_logo_splash} alt='' />  </Box>
        <Box sx={{ marginBottom: '17px', textAlign: 'center', display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: '21px', color: '#2A3752', lineHeight: '27px' }}>
          <Box sx={{ marginLeft: '7px', color: '#CCF1FF', borderRadius: '3px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}> <img src={biomark_text_splash} alt='' /> </Box></Box>
        <ThemeProvider theme={theme}> <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', fontWeight: '700', fontSize: '16px', color: '#2A3752', lineHeight: '27px' }}>
          <Typography style={titleStyle}> Lab Dispatch App</Typography> </Box> </ThemeProvider>
      </Grid>
      <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Box sx={{ display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '13px', color: '#2A3752', lineHeight: '16px' }}> Version X.X</Box>
      </Grid>
    </Grid>
  )
}
export default SplashScreen