import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import { loginPageStyles } from "../LoginScreens/LoginStyles";
import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ChangePasswordPopVew(props) {
  let navigate = useNavigate();
  const classes = loginPageStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const buttonStyle = { textTransform: 'capitalize', fontSize: '19px', color: '#FFFFFF', fontWeight: '700', lineHeight: '25px' };

  const login_screen = () => { navigate('/login') }
  const border_button = { border: 2 };
  const titleStyle = { fontSize: '19px', lineHeight: '25px', fontWeight: '700', color: '#054E8B' };
  const descStyle = { fontSize: '14px', lineHeight: '19px', fontWeight: '400', color: '#2A3752' };
  const buttonStyle2 = { textTransform: 'none', fontSize: '15px', color: '#2A3752', fontWeight: '700', lineHeight: '20px' };
  return (
    <React.Fragment>
      <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }} >
        <Button onClick={handleClickOpen} disableRipple variant='text' sx={{ maxWidth: '240px', width: '100%', borderRadius: '8px', background: '#054E8B', bgcolor: '#054E8B', color: '#ffffff', ':hover': { bgcolor: '#054E8B', color: '#ffffff' } }}>
          <Box className={classes.heading10} style={buttonStyle}> Change Password</Box>
        </Button>
      </Box>
      <Dialog sx={{
        '& .MuiDialogContent-root ': { padding: '0px 0px', margin: 0 },
        '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper ': { margin: '7px', borderRadius: '8px' }
      }}
        width={fullWidth} margin={0} open={open} onClose={handleClose}>
        <DialogContent sx={{
          '& .MuiDialogContent-root ': { padding: '51px 1px' },
          '& .MuiDialog-paper  ': { margin: '1px', width: '20px' },
        }}>
          <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Box sx={{ boxShadow: '3', paddingBottom: '12px', px: '9px', paddingTop: '20px', borderRadius: '8px', backgroundColor: '#FFFFFF', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box> <CheckCircleIcon sx={{ color: '#054E8B', fontSize: 58 }} /></Box>
              <Box sx={{ textAlign: 'center', marginTop: '15px', marginBottom: '12px' }}>
                <Box style={titleStyle} className={classes.heading10}>Password Changed!</Box></Box>
              <Box sx={{ mb: '20px', textAlign: 'center' }} style={descStyle} className={classes.heading}>Your password has been changed successfuly.</Box>
              <Button onClick={login_screen} disableRipple variant='text' sx={{ ...border_button, width: '100%', borderRadius: '8px', borderColor: '#054E8B', bgcolor: '#ffffff', ':hover': { bgcolor: '#ffffff' } }}>
                <Box style={buttonStyle2} className={classes.heading10}>Back to login screen</Box>
              </Button>
            </Box>
          </Grid >
        </DialogContent>
      </Dialog>
    </React.Fragment >
  );
}
