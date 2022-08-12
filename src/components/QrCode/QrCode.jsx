import React from "react";
import { Box } from "@mui/system";
import QRCode from "react-qr-code";
import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  qrCodeParent: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(5),
    justifyItems: "center",
  },
}));

const QrCode = () => {
  const classes = styles();
  return (
    <>
      <Box className={classes.qrCodeParent}>
        <QRCode value="Clinic QR Code" size={100} />
      </Box>
    </>
  );
};

export default QrCode;
