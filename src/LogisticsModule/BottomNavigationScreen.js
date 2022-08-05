import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import delivery from '../Images/delivery.svg'
import history from '../Images/historyimg.svg'
import profiles from '../Images/profiles.svg'
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BottomNavigationScreen = () => {
  let navigates = useNavigate();
  const logistics = () => { navigates('/logistics'); };
  const logistics_history = () => { navigates('/logistics_history'); };
  const profile = () => { navigates('/profile'); };
  const [value, setValue] = React.useState('1');
  const divStyle = { backgroundColor: '#ffffff', paddingTop: '12px', paddingBottom: '8px', height: '77px' };
  return (
    <Paper sx={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px -4px 0px 0px ', }}>
      <BottomNavigation
        sx={{
          '& .MuiBottomNavigationAction-label.Mui-selected ': { fontSize: '13px', lineHeight: '16.32px', fontWeight: '700', color: '#054E8B', marginTop: '6px' },
          '& .MuiBottomNavigationAction-label ': { fontSize: '13px', lineHeight: '16.32px', fontWeight: '400', color: '#8493AE', marginTop: '6px' },
          '& .MuiButtonBase-root-Mui-selected': { color: '#F2F4F7' },
          '& .MuiBottomNavigation-root ': { height: '100px' },
          '& .MuiBottomNavigationAction-root.Mui-selected': { color: '#F2F4F7' },
        }}
        showLabels value={value} onChange={(event, newValue) => { setValue(newValue); }} style={divStyle}>
        <BottomNavigationAction label="Logistics" icon={<img src={delivery} alt='' />} onClick={logistics} />
        <BottomNavigationAction label="History" icon={<img src={history} alt='' />} onClick={logistics_history} />
        <BottomNavigationAction label="Profile" icon={<img src={profiles} alt='' />} onClick={profile} />
      </BottomNavigation>
    </Paper>
  )
}

export default BottomNavigationScreen