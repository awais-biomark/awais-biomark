import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { loginPageStyles } from "../LoginScreens/LoginStyles";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { styled } from '@mui/system';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: { top: 13, left: 'calc(-50% + 14px)', right: 'calc(50% + 15px)' },
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
const steps = ['Clinic QR', 'Pickp Details', 'Cable Tie QR', 'Confirmation'];

const StepperScreen = () => {
  const classes = loginPageStyles();
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'  >
      <Box sx={{ maxWidth: '375px', width: '100%' }}>
        <Box sx={{ width: '100%', marginTop: '11px' }}>
          <Stepper activeStep={2} alternativeLabel className={classes.headings} connector={<QontoConnector />} sx={{
            '& .MuiStepLabel-root .Mui-completed': { color: 'secondary.dark' },
            '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel': { color: 'grey.500', },
            '& .MuiStepLabel-root .Mui-active': { color: 'secondary.main', },
            '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel': { color: '#2A3752', fontFamily: 'Mulish', lineHeight: '14px', fontSize: '12px', fontWeight: 400, },
            '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': { fill: 'white' },
            '& .MuiStepIcon-text-root  ': { fill: '#111111' },
            '& .MuiStepIcon-text.Mui-active  ': { fill: '#ffffff' },
            '& .MuiStepIcon-text ': { fill: '#8493AE', fontFamily: 'Mukta', fontWeight: 400, fontSize: '14px', lineHeight: '25px' },
            ".MuiSvgIcon-root": { borderRadius: "50%", border: "2px solid #1B96D8", fill: '#ffffff', },
            '& .MuiStepLabel-label.Mui-active ,': { fontSize: '12px', lineHeight: '15px', fontWeight: '400', color: '#111111', width: '100%', fontFamily: ["Mulish", "sans-serif"].join(",") },
            '& .MuiStepLabel-label ,': { fontSize: '12px', lineHeight: '15px', fontWeight: '400', color: '#8493AE', width: '100%', fontFamily: ["Mulish", "sans-serif"].join(",") },
            '& .MuiStepLabel-label.Mui-completed ,': { fontSize: '12px', lineHeight: '15px', fontWeight: '400', color: '#8493AE', width: '100%', fontFamily: ["Mulish", "sans-serif"].join(","), },
            '& .MuiStep-root ,': { paddingLeft: '0px', paddingRight: '0px', },
            '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel ': { marginTop: '2px', left: 'calc(-50 % + 15px)', right: 'calc(50 % + 16px)', paddingLeft: '-0px', paddingRight: '-10px', },
            '& .MuiStepIcon-root.Mui-completed ': { color: '#054E8B', fill: '#11111' },
            '& .MuiStepIcon-root.Mui-active ': { color: '#2A3752', fontSize: '19px', fontWeight: '700', lineHeight: '25px', fontFamily: ["Mukta"].join(","), width: '30px', height: '30px' },
            '& .MuiStepIcon-root ': { fontSize: '19px', fontWeight: '700', lineHeight: '25px', fontFamily: ["Mukta"].join(","), color: '#8493AE', width: '30px', height: '30px' },
            '& .MuiSvgIcon-root.Mui-active  ': { color: '#ffffff', fill: '#054E8B', width: '70px', border: "2px solid transparent", borderRadius: "50%", fontSize: '20px' },
            '& .MuiSvgIcon-root.Mui-completed  ': { color: '#054E8B', fill: '#054E8B', width: '70px', border: "2px solid transparent", borderRadius: "50%", fontSize: '20px' },
            '& .MuiStepper-root .MuiStepIcon-text ': { color: '#ffffff', },
            '& .MuiSvgIcon-root  ': { color: '#CCF1FF' },
            '& .MuiStepConnector-root.MuiStepConnector-alternativeLabel  ': { left: 'calc(-50 % + 15px)', right: 'calc(50 % + 16px)', },
            '& .MuiStepConnector-root': { color: '#CCF1FF', left: 'calc(-50%+15px)', right: 'calc(50 % + 15px)', paddingLeft: '-10px', paddingRight: '-10px', top: '12px', position: 'absolute', },
            '& .MuiStepConnector-line  ': { color: '#CCF1FF', borderTopWidth: '3px', borderTopStyle: 'solid', display: 'block', borderColor: '#1B96D8', left: 'calc(-50 % + 15px)', right: 'calc(50 % + 16px)', paddingLeft: '-10px', paddingRight: '-10px', },
          }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel >{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Box>
    </Grid >
  )
}
export default StepperScreen;

