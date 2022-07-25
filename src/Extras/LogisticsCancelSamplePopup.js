import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { loginPageStyles } from "../Screens/LoginStyles";

const titleStyle = { fontSize: '17px', lineHeight: '22px', fontWeight: '700', color: '#054E8B' };
const descStyle = { textAlign: 'center', fontSize: '15px', lineHeight: '19px', fontWeight: '400', color: '#455066' };
const theme = createTheme({ typography: { fontFamily: ['Mulish'].join(',') } });
const nextbuttonStyle = { backgroundColor: '#054E8B', textTransform: 'capitalize', fontSize: '15px', color: '#FFFFFF', fontWeight: '700', lineHeight: '20px' };
const cancelbuttonStyle = { backgroundColor: '#FAFAFA', textTransform: 'capitalize', fontSize: '15px', color: '#EA4C59', fontWeight: '400', lineHeight: '19px' };
const LogisticsCancelSamplePopup = () => {
  const classes = loginPageStyles();
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Box sx={{ boxShadow: '3', paddingBottom: '20px', px: '14px', paddingTop: '32px', borderRadius: '8px', backgroundColor: '#FFFFFF', maxWidth: '351px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ textAlign: 'center', marginTop: '20px', marginBottom: '8px' }}>
          <Typography style={titleStyle} className={classes.heading10}>Cancel Changes?</Typography></Box>
        <ThemeProvider theme={theme}> <Box sx={{ marginBottom: '20px' }}>
          <Typography style={descStyle}>Changes you made so far will not be saved. You will be brought back to the logistic homescreen. </Typography></Box></ThemeProvider>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Button disableRipple variant='text' sx={{ maxWidth: '134px', width: '100%', maxHeight: '36px', height: '100%', borderRadius: '10px', py: '10px', ':hover': { bgcolor: '#ffffff' } }} style={cancelbuttonStyle}>Don’t Cancel</Button>
          <Button disableRipple variant='text' sx={{ maxWidth: '103px', width: '100%', maxHeight: '36px', height: '100%', borderRadius: '8px', py: '10px', ':hover': { bgcolor: '#054E8B' } }} style={nextbuttonStyle}>Yes</Button>
        </Box>
      </Box>
    </Grid>
  )
}
export default LogisticsCancelSamplePopup