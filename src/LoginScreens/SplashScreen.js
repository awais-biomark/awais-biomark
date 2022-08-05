import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import biomark_text_splash from '../Images/biomark_text_splash.svg';
import biomark_logo_splash from '../Images/biomark_logo_splash.svg';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const SplashScreen = () => {
  const theme = createTheme({ typography: { fontFamily: ['Mukta'].join(',') }, });
  const titleStyle = { fontSize: '21px', lineHeight: '27px', fontWeight: '700', color: '#2A3752' };
  return (
    <Grid>
      <Grid container direction='column' justifyContent='center' alignItems='center' height='100%'>
        <Grid container direction='column' justifyContent='center' alignItems='center'>
          <Box sx={{ mt: '11.875rem', mb: '1.375rem', alignItems: 'center', justifyContent: 'center', display: 'flex' }}> <img src={biomark_logo_splash} alt='' /> </Box>
          <Box sx={{ mb: '1.0625rem', textAlign: 'center', display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: '21px', color: '#2A3752', lineHeight: '27px' }}>
            <Box sx={{ ml: '0.4375rem', color: '#CCF1FF', borderRadius: '3px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}> <img src={biomark_text_splash} alt='' /> </Box></Box>
          <ThemeProvider theme={theme}> <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', fontWeight: '700', fontSize: '16px', color: '#2A3752', lineHeight: '27px' }}>
            <Typography style={titleStyle}> Lab Dispatch App</Typography> </Box> </ThemeProvider>
          <Box sx={{ mt: '16.25rem', display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '13px', color: '#8493AE', lineHeight: '16px' }}> Version X.X</Box>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default SplashScreen