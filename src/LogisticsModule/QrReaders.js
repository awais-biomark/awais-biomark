import React from 'react';
import QrReader from "react-web-qr-reader";
import "./styles.css";
import { Grid } from '@mui/material';

function QrReaders() {
  return (
    <>

      <Grid container justifyContent="center " >
        <QrReader className="qr-image-wrapper relative "
          delay={300}
          style={{ width: '100%' }}
          facingMode={{}}
          legacyMode
        />

      </Grid>


    </>
  );
}

export default QrReaders;