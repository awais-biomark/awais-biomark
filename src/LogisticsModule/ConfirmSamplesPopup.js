import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import { loginPageStyles } from "../LoginScreens/LoginStyles";
import biomark_text from '../Images/biomark_text.svg';
import biomark_logo from '../Images/biomark_logo.svg';
import { useNavigate } from 'react-router-dom';

const titleStyle = { fontSize: '17px', lineHeight: '22px', fontWeight: '700', color: '#054E8B' };
const descStyle = { fontFamily: 'Mulish', fontSize: '14px', lineHeight: '19px', fontWeight: '400', color: '#455066' };
const nextbuttonStyle = { fontFamily: 'Mukta', backgroundColor: '#054E8B', textTransform: 'capitalize', fontSize: '15px', color: '#FFFFFF', fontWeight: '700', lineHeight: '20px' };
const cancelbuttonStyle = { fontFamily: 'Mulish', backgroundColor: '#FAFAFA', textTransform: 'capitalize', fontSize: '14px', color: '#EA4C59', fontWeight: '400', lineHeight: '19px' };
export default function ConfirmSamplesPopup(props) {
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
    setOpen(false);
  };
  const handleClickCancel = () => {
    setCancel(true);
  };
  const handleCloseCancel = () => {
    setCancel(false);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: '32px' }}>
        <Box sx={{ maxWidth: '280px', width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '43px', paddingLeft: '10px', paddingRight: '8px' }}>
          <Button onClick={handleClickCancel} disableRipple variant='text' sx={{ maxWidth: '86px', width: '100%', borderRadius: '10px', py: '10px', ':hover': { bgcolor: '#ffffff' } }} style={cancelbuttonStyle}>Cancel</Button>
          <Button onClick={handleClickOpen} disableRipple variant='text' sx={{ maxWidth: '86px', width: '100%', borderRadius: '8px', ':hover': { bgcolor: '#054E8B' } }} style={nextbuttonStyle}>Next</Button>
        </Box>
      </Box>
      <Dialog sx={{
        '& .MuiDialogContent-root ': { padding: '0px 0px', margin: 0 },
        '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper ': { margin: '19px', borderRadius: '8px' }
      }}
        width={fullWidth} margin={0} open={open} onClose={handleClose}>
        <DialogContent sx={{
          '& .MuiDialogContent-root ': { padding: '51px 1px' },
          '& .MuiDialog-paper  ': { margin: '1px', width: '20px' },
        }}>
          <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Box sx={{ boxShadow: '3', paddingBottom: '20px', px: '14px', paddingTop: '32px', borderRadius: '8px', backgroundColor: '#FFFFFF', maxWidth: '351px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignContent: 'center', maxWidth: '148px', justifyContent: 'space-between' }}>
                <img src={biomark_logo} alt='' style={{ width: '44px' }} />
                <Box sx={{ mr: '11px' }}></Box>
                <img src={biomark_text} alt='' style={{ width: '92px' }} />
              </Box>
              <Box sx={{ textAlign: 'center', marginTop: '20px', marginBottom: '8px' }}>
                <Box style={titleStyle} className={classes.heading10}>Confirm Orders and Sample Count!</Box></Box>
              <Box sx={{ textAlign: 'center', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <Box style={descStyle}>Ensure checking that the orders and quantity that you are collecting is correct.</Box></Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Button onClick={handleClose} disableRipple variant='text' sx={{ maxWidth: '133px', width: '100%', borderRadius: '10px', py: '10px', ':hover': { bgcolor: '#ffffff' } }} style={cancelbuttonStyle}>Check Again</Button>
                <Button onClick={gotonext} disableRipple variant='text' sx={{ maxWidth: '133px', width: '100%', borderRadius: '8px', py: '10px', ':hover': { bgcolor: '#054E8B' } }} style={nextbuttonStyle}>Confirm</Button>
              </Box>
            </Box>
          </Grid>
        </DialogContent>
      </Dialog>
      <Dialog sx={{
        '& .MuiDialogContent-root ': { padding: '0px 0px', margin: 0 },
        '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper ': { margin: '19px', borderRadius: '8px' }
      }}
        width={fullWidth} margin={0} open={cancel} onClose={handleCloseCancel}>
        <DialogContent sx={{
          '& .MuiDialogContent-root ': { padding: '51px 1px' },
          '& .MuiDialog-paper  ': { margin: '1px', width: '20px' },
        }}>
          <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Box sx={{ boxShadow: '3', paddingBottom: '20px', px: '14px', paddingTop: '32px', borderRadius: '8px', backgroundColor: '#FFFFFF', maxWidth: '351px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ textAlign: 'center', marginTop: '0px', marginBottom: '8px' }}>
                <Box style={titleStyle} className={classes.heading10}>Cancel Changes?</Box></Box>
              <Box sx={{ textAlign: 'center', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <Box style={descStyle} className={classes.heading}>Changes you made so far will not be saved. You will be brought back to the logistic homescreen.</Box></Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Button onClick={handleCloseCancel} disableRipple variant='text' sx={{ maxWidth: '134px', width: '100%', maxHeight: '36px', height: '100%', borderRadius: '10px', py: '10px', ':hover': { bgcolor: '#ffffff' } }} style={cancelbuttonStyle}>Don’t Cancel</Button>
                <Button onClick={gotologistics} disableRipple variant='text' sx={{ maxWidth: '103px', width: '100%', maxHeight: '36px', height: '100%', borderRadius: '8px', py: '10px', ':hover': { bgcolor: '#054E8B' } }} style={nextbuttonStyle}>Yes</Button>
              </Box>
            </Box>
          </Grid>
        </DialogContent>
      </Dialog>
    </React.Fragment >
  );
}
