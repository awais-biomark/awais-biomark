import Box from '@mui/material/Box';
import React from 'react'
import CurrentPickData from './CurrentPickData'
import { loginPageStyles } from "../LoginScreens/LoginStyles";
import NextLocationsComponent from './NextLocationsComponent'

const LogisticsTabData = () => {
  const classes = loginPageStyles();
  return (
    <Box>
      <Box sx={{ mt: '-1px', bgcolor: '#054E8B', display: 'flex', justifyContent: 'space-between', pl: '18px', pr: '12px', alignItems: 'center', pb: '4px', pt: '12px' }}>
        <Box className={classes.heading10} sx={{ color: '#FAFAFA', fontWeight: '700', fontSize: '15px', textAlign: 'end', lineHeight: '20px' }}>Current Pick Up</Box>
      </Box>
      <CurrentPickData />
      <Box sx={{ bgcolor: '#EBEFF5', display: 'flex', justifyContent: 'space-between', pl: '18px', pr: '12px', alignItems: 'center', pb: '4px', pt: '12px' }}>
        <Box className={classes.heading10} sx={{ color: '#455066', fontWeight: '700', fontSize: '15px', textAlign: 'end', lineHeight: '20px' }}>Next Locations</Box>
      </Box>
      <NextLocationsComponent />
    </Box>
  )
}

export default LogisticsTabData