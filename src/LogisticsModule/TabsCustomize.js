import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { BottomNavigation, Divider } from '@mui/material';
import { height, minHeight } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { TabsContext } from '@mui/base';

const AntTabs = styled(Tabs)({
  root: {
    padding: '0px'
  },
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
    '&.MuiButtonBase-root-MuiTab-root': {
      padding: '16px 25px'
    },
  },
});

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 100,
    width: '100%',
    backgroundColor: 'transparent',
  },
  '& .MuiTab-root.Mui-selected': {
    backgroundColor: '#054E8B',
    color: '#ffffff',
    px: '2px',
    width: '115px',
    fontSize: '15px',
    fontWeight: '700',
    lineheight: '20px',
    fontFamily: 'Mukta',
    height: '48px',
    minHeight: '48px'


  },
  '& .MuiTab-root': {
    backgroundColor: '#ffffff',
    color: '#455066',
    px: '0px',
    width: '114px',
    fontSize: '15px',
    lineheight: '19px',
    fontWeight: '400',
    fontFamily: 'Mulish'

  },
  '& .MuiButtonBase-root-MuiTab-root': {
    color: '#054E8B',

  },
  '&.MuiTab-root': {
    padding: '0px'
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
    },
    '&.MuiButtonBase-root-MuiTab-root': {
      padding: '16px 25px'
    },

    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },

  }),
);

export default function TabsCustomize() {
  const [value, setValue] = React.useState(0);
  let navigates = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    const logistics = () => { navigates('/logistics'); };
  };
  const logistics = () => { navigates('/logistics'); };
  const logistics_collected = () => { navigates('/logistics_collected'); };
  const logistics_delivered = () => { navigates('/logistics_delivered'); };
  return (
    <Box sx={{ width: '100%' }}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="styled tabs example" >
        <StyledTab label="Pick ups" onClick={logistics} />
        <StyledTab label="Collected" onClick={logistics_collected} />
        <StyledTab label="Delivered" onClick={logistics_delivered} />
      </StyledTabs>

    </Box>

  );
}
