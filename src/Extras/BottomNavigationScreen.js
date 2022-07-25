import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import delivery from '../Images/delivery.svg'
import history from '../Images/historyimg.svg'
import profiles from '../Images/profiles.svg'
import { Paper } from '@mui/material';

const BottomNavigationScreen = () => {
  const [value, setValue] = React.useState('1');
  const divStyle = { backgroundColor: '#ffffff', paddingTop: '22px', paddingBottom: '22px' };
  return (
    <Paper sx={{ boxShadow: '0px 0px 8px 1px rgba(0, 0, 0, 0.2)' }}>
      <BottomNavigation sx={{
        '& .MuiBottomNavigationAction-label.Mui-selected ': { fontSize: '13px', lineHeight: '16.32px', fontWeight: '700', color: '#054E8B', marginTop: '6px' },
        '& .MuiBottomNavigationAction-label ': { fontSize: '13px', lineHeight: '16.32px', fontWeight: '400', color: '#8493AE', marginTop: '6px' },
        '& .MuiButtonBase-root-Mui-selected': { color: '#F2F4F7' },
        '& .MuiBottomNavigationAction-root.Mui-selected': { color: '#F2F4F7' }
      }}
        showLabels value={value} onChange={(event, newValue) => { setValue(newValue); }} style={divStyle}>
        <BottomNavigationAction label="Logistics" icon={<img src={delivery} alt='' />} />
        <BottomNavigationAction label="History" icon={<img src={history} alt='' />} />
        <BottomNavigationAction label="Profile" icon={<img src={profiles} alt='' />} />
      </BottomNavigation>
    </Paper>
  )
}

export default BottomNavigationScreen