import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LogisticsTabData from './LogisticsTabData';
import LogisticsCollectedAxiosData from './LogisticsCollectedAxiosData';
import LogisticsDeliveredAxiosData from './LogisticsDeliveredAxiosData';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function TabsCustomization() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
      fontSize: '13.5px',
      lineheight: '19px',
      fontWeight: '400',
      fontFamily: 'Sans'

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
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example" >
          <StyledTab label="Pick ups " {...a11yProps(0)} sx={{ '& .MuiTab-root.Mui-selected': { color: '#112233' } }} />
          <StyledTab label="Collected" {...a11yProps(1)} />
          <StyledTab label="Delivered" {...a11yProps(2)} />
        </StyledTabs>
      </Box>
      <TabPanel value={value} index={0}>
        <LogisticsTabData />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LogisticsCollectedAxiosData />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LogisticsDeliveredAxiosData />
      </TabPanel>
    </Box>
  );
}
