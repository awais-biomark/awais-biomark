import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { loginPageStyles } from "../Screens/LoginStyles";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { styled } from '@mui/system';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Paper } from '@mui/material';
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: { top: 10, left: 'calc(-50% + 13px)', right: 'calc(50% + 12px)' },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: { borderColor: '#054E8B' }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: { borderColor: '#054E8B' },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#1B96D8',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));
const steps = ['Clinic QR', 'Pickp Details', 'Cable Tie QR', 'Signature'];

const StepperScreen = () => {
  const classes = loginPageStyles();
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'  >
      <Box sx={{ maxWidth: '375px', width: '100%', paddingLeft: '10px', paddingRight: '10px' }}>
        <Box sx={{ width: '100%', marginTop: '11px' }}>
          <Stepper activeStep={0} alternativeLabel className={classes.headings} connector={<QontoConnector />} sx={{
            '& .MuiStepLabel-label ,': { fontSize: '12px', lineHeight: '15px', fontWeight: '400', color: '#8493AE', width: '100%', fontFamily: ["Mulish", "sans-serif"].join(",") },
            '& .MuiStepLabel-label.Mui-completed ,': { fontSize: '12px', lineHeight: '15px', fontWeight: '400', color: '#8493AE', width: '100%', fontFamily: ["Mulish", "sans-serif"].join(","), },
            '& .MuiStep-root ,': { paddingLeft: '0px', paddingRight: '0px' },
            '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel ': { marginTop: '2px' },
            '& .MuiStepIcon-root.Mui-completed ': { color: '#054E8B', },
            '& .MuiStepIcon-root.Mui-active ': { color: '#2A3752', fontSize: '19px', fontWeight: '700', lineHeight: '25px', fontFamily: ["Mukta"].join(","), width: '30px', height: '30px' },
            '& .MuiStepIcon-root ': { fontSize: '19px', fontWeight: '700', lineHeight: '25px', fontFamily: ["Mukta"].join(","), color: '#8493AE', width: '30px', height: '30px' },
            '& .MuiSvgIcon-root.Mui-active  ': { color: '#054E8B', },
            '& .MuiSvgIcon-root  ': { color: '#CCF1FF' },
            '& .MuiStepConnector-root': { color: '#054E8B', left: 'calc(-50%+15px)', right: 'calc(50 % + 15px)', paddingLeft: '-10px', paddingRight: '-10px', top: '12px', position: 'absolute', },
            '& .MuiStepConnector-line  ': { color: '#054E8B', borderTopWidth: '3px', borderTopStyle: 'solid', display: 'block', borderColor: '#054E8B', left: 'calc(-50 % + 15px)', right: 'calc(50 % + 15px)', paddingLeft: '-10px', paddingRight: '-10px', },
          }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel >{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Box>
    </Grid>
  )
}
export default StepperScreen;
