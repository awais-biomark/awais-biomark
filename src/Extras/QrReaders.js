import React from 'react';
import QrReader from "react-web-qr-reader";
import Box from '@mui/material/Box';
import "./styles.css";
import FlipCameraIosIcon from '@mui/icons-material/FlipCameraIos';

function QrReaders() {
  return (
    <>
      <QrReader className="qr-image-wrapper relative"
        delay={300}
        style={{ width: '100%' }}
        facingMode={{ padding: '100px' }}
        legacyMode
      />
      {/* <Box sx={{
        '& .MuiSvgIcon-root ': { right: '400px', position: 'absolute' }
      }}>
        <FlipCameraIosIcon className='setImage' color="action"
        />
      </Box> */}
    </>
  );
}

export default QrReaders;