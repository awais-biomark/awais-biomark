

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import { loginPageStyles } from "../LoginScreens/LoginStyles";
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import { useNavigate } from 'react-router-dom';

//style for login button 
const titleStyle = { fontSize: '17px', lineHeight: '22px', fontWeight: '700', color: '#054E8B' };
const descStyle1 = { fontSize: '13.5px', lineHeight: '19px', fontWeight: '400', color: '#2A3752' };
const border_button = { border: 2 };
const buttonStyle = { textTransform: 'capitalize', fontSize: '17px', color: '#FFFFFF', fontWeight: '700', lineHeight: '22px' };
const descStyle = { fontFamily: 'Mulish', fontSize: '14px', lineHeight: '19px', fontWeight: '400', color: '#455066' };

///styles for max attempts reached
const titleStyle1 = { fontSize: '19px', lineHeight: '25px', fontWeight: '700', color: '#054E8B' };
const descStyle2 = { fontSize: '13.5px', lineHeight: '19px', fontWeight: '400', color: '#2A3752' };
const buttonStyle3 = { textTransform: 'capitalize', fontSize: '15px', color: '#2A3752', fontWeight: '700', lineHeight: '20px' };

//styles for invalid username password
const border_button4 = { border: 2 };
const titleStyle4 = { fontSize: '19px', lineHeight: '25px', fontWeight: '700', color: '#054E8B' };
const descStyle4 = { fontFamily: 'Mulish', fontSize: '14px', lineHeight: '19px', fontWeight: '400', color: '#2A3752' };
const buttonStyle4 = { textTransform: 'capitalize', fontSize: '15px', color: '#2A3752', fontWeight: '700', lineHeight: '20px' };

//styles for inactive user 
const border_button5 = { border: 2 };
const titleStyle5 = { fontSize: '19px', lineHeight: '25px', fontWeight: '700', color: '#054E8B' };
const descStyle5 = { fontFamily: 'Mulish', fontSize: '14px', lineHeight: '19px', fontWeight: '400', color: '#2A3752' };
const buttonStyle5 = { textTransform: 'capitalize', fontSize: '15px', color: '#2A3752', fontWeight: '700', lineHeight: '20px' };

export default function MaxAttemptPopupForLogin(props) {
  let navigate = useNavigate();
  const gotonext = () => { navigate('/cable_tie_qr'); };
  const gotologistics = () => { navigate('/logistics'); };
  const classes = loginPageStyles();
  const [open, setOpen] = React.useState(false);
  const [cancel, setCancel] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    props.setOpen(false);
  };
  const handleClickCancel = () => {
    setCancel(true);
  };
  const handleCloseCancel = () => {
    // setCancel(false);
    props.setOpen(false);
  };

  return (
    <React.Fragment>

      <Dialog sx={{ '& .MuiDialogContent-root ': { padding: '0px 0px', margin: 0 }, '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper ': { margin: '19px', borderRadius: '8px' } }}
        width={fullWidth} margin={0} open={true} onClose={handleCloseCancel}>
        <DialogContent sx={{ '& .MuiDialogContent-root ': { padding: '51px 1px' }, '& .MuiDialog-paper  ': { margin: '1px', width: '20px' } }}>

          <Grid container direction='row' justifyContent='center' alignItems='center' >
            <Box sx={{ boxShadow: '3', paddingBottom: '12px', px: '12px', paddingTop: '17px', borderRadius: '8px', backgroundColor: '#FFFFFF', maxWidth: '351px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box> <DoNotDisturbIcon sx={{ color: '#FFD75E', fontSize: 58 }} /></Box>
              <Box sx={{ textAlign: 'center', marginTohandleClosep: '14px', marginBottom: '12px' }}>
                <Box style={titleStyle4} className={classes.heading10}>Invalid Username/Password</Box></Box>
              <Box sx={{ textAlign: 'center', marginBottom: '11px' }}>
                <Box style={descStyle4} className={classes.heading}>The entered information is wrong.</Box></Box>
              <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
                <Box style={descStyle4} className={classes.heading}>Please try again.</Box></Box>
              <Button onClick={handleClose} disableRipple variant='text' sx={{ ...border_button4, width: '100%', borderRadius: '8px', borderColor: '#054E8B', bgcolor: '#ffffff', ':hover': { bgcolor: '#ffffff' } }}>
                <Box style={buttonStyle4} className={classes.heading10} onClose={handleClose}>Okay</Box>
              </Button>
            </Box>
          </Grid>

        </DialogContent>
      </Dialog>
    </React.Fragment >
  );
}
