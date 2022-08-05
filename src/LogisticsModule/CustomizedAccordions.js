import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import { Divider } from '@mui/material';
const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiPaper-root": {

      boxShadow: 'none'
    },
    '& .MuiPaper-root-MuiAccordion-root': {

      boxShadow: 'none'
    },
    MuiAccordion: {
      root: {
        boxShadow: 'none'
      }
    }

  }
}));
export default function CustomizedAccordions() {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ boxShadow: 'none' }}>
      <Paper sx={{ ' & .MuiPaper-elevation1 ': { boxShadow: 'none' } }} elevation={0} style={{ boxShadow: 'none' }}>
        <Accordion >
          <Box sx={{ display: 'flex', justifyContent: 'center' }} style={{ boxShadow: 'none' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'start', alignContent: 'start' }}>
              <Typography>Clinic name</Typography>
              <Typography>distance</Typography>
            </Box>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}
              id="panel1a-header"
            >
            </AccordionSummary>
            <Divider />
          </Box>
          <AccordionDetails>
            <Typography>
              Text 1
            </Typography>
            <Typography>
              Text 2
            </Typography>
            <Typography>
              Text 3
            </Typography>
          </AccordionDetails>
          <Divider />
        </Accordion>
      </Paper >

    </div>
  );
}
