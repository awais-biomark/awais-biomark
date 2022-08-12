import React from "react";

import { Box, Typography, Card } from "@mui/material";

import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  card: {
    "&.MuiCard-root": {
      marginTop: theme.spacing(2),
      border: "1px solid grey",
      marginRight: "20px",
    },
  },

  cardHeight: {
    height: "55vh",
    overflowY: "auto",
  },
  mainHead: {
    backgroundColor: "#072267",
    display: "flex",
    justifyContent: "space-evenly",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardHeading: {
    "&.MuiTypography-root": {
      fontFamily: "Mulish",
      fontStyle: "normal",
      fontWeight: 700,
      color: "white",
      fontSize: "15px",
    },
  },
  cardSubHeading: {
    "&.MuiTypography-root": {
      fontFamily: "Ek Mukta",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "15px",
      color: theme.palette.textHeadingColor,
    },
  },
  cardParagraph: {
    "&.MuiTypography-root": {
      fontFamily: "Mulish",
      fontWeight: 400,
      fontSize: "12px",
      color: theme.palette.textHeadingColor,
    },
  },
  cardContent: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    border: "1px solid gray",
    borderRadius: "5px",
  },
  cardWrap: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const MarketingCardForSalesAnDFunnel = () => {
  const classes = styles();
  return (
    <>
      <Box className={classes.cardWrap}>
        <Card className={classes.card}>
          <Box className={classes.mainHead}>
            <Typography variant="h2" className={classes.cardHeading}>
              Pre-engagement
            </Typography>
            <Typography variant="p1" className={classes.cardHeading}>
              4
            </Typography>
          </Box>
          <Box className={classes.cardHeight}>
            <Box className={classes.cardContent}>
              <Typography variant="h5" className={classes.cardSubHeading}>
                Biomark Platform Access for Nick Clinic
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                Open for 1 Minute{" "}
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                <b>Ticket Owner</b> : Say Hui{" "}
              </Typography>
            </Box>
            <Box className={classes.cardContent}>
              <Typography variant="h5" className={classes.cardSubHeading}>
                Biomark Platform Access for Nick Clinic
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                Open for 1 Minute{" "}
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                <b>Ticket Owner</b> : Say Hui{" "}
              </Typography>
            </Box>
            <Box className={classes.cardContent}>
              <Typography variant="h5" className={classes.cardSubHeading}>
                Biomark Platform Access for Nick Clinic
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                Open for 1 Minute{" "}
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                <b>Ticket Owner</b> : Say Hui{" "}
              </Typography>
            </Box>
            <Box className={classes.cardContent}>
              <Typography variant="h5" className={classes.cardSubHeading}>
                Biomark Platform Access for Nick Clinic
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                Open for 1 Minute{" "}
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                <b>Ticket Owner</b> : Say Hui{" "}
              </Typography>
            </Box>
            <Box className={classes.cardContent}>
              <Typography variant="h5" className={classes.cardSubHeading}>
                Biomark Platform Access for Nick Clinic
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                Open for 1 Minute{" "}
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                <b>Ticket Owner</b> : Say Hui{" "}
              </Typography>
            </Box>
          </Box>
        </Card>
        {/* 
        <Card className={classes.card}>
          <Box className={classes.mainHead}>
            <Typography variant="h2" className={classes.cardHeading}>
              First-Contact
            </Typography>
            <Typography variant="p1" className={classes.cardHeading}>
              2
            </Typography>
          </Box>
          <Box className={classes.cardHeight}>
            <Box className={classes.cardContent}>
              <Typography variant="h5" className={classes.cardSubHeading}>
                Biomark Platform Access for Nicky Clinic
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                Open for 3 Minute{" "}
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                <b>Ticket Owner</b> : Say Hui{" "}
              </Typography>
            </Box>
            <Box className={classes.cardContent}>
              <Typography variant="h5" className={classes.cardSubHeading}>
                Biomark Platform Access for Nick Clinic
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                Open for 2 days{" "}
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                <b>Ticket Owner</b> : Loss{" "}
              </Typography>
            </Box>
            <Box className={classes.cardContent}>
              <Typography variant="h5" className={classes.cardSubHeading}>
                Biomark Platform Access for Nick Clinic
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                Open for 1 Minute{" "}
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                <b>Ticket Owner</b> : Say Hui{" "}
              </Typography>
            </Box>
            <Box className={classes.cardContent}>
              <Typography variant="h5" className={classes.cardSubHeading}>
                Biomark Platform Access for Nick Clinic
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                Open for 1 Minute{" "}
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                <b>Ticket Owner</b> : Say Hui{" "}
              </Typography>
            </Box>
            <Box className={classes.cardContent}>
              <Typography variant="h5" className={classes.cardSubHeading}>
                Biomark Platform Access for Nick Clinic
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                Open for 1 Minute{" "}
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                <b>Ticket Owner</b> : Say Hui{" "}
              </Typography>
            </Box>
          </Box>
        </Card>

        <Card className={classes.card}>
          <Box className={classes.mainHead}>
            <Typography variant="h2" className={classes.cardHeading}>
              Action(s) Taken
            </Typography>
            <Typography variant="p1" className={classes.cardHeading}>
              2
            </Typography>
          </Box>
          <Box className={classes.cardHeight}>
            <Box className={classes.cardContent}>
              <Typography variant="h5" className={classes.cardSubHeading}>
                Biomark Platform Access for Wick Clinic
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                Open for 3 days{" "}
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                <b>Ticket Owner</b> : Say Hui{" "}
              </Typography>
            </Box>
            <Box className={classes.cardContent}>
              <Typography variant="h5" className={classes.cardSubHeading}>
                Biomark Platform Access for Nick Clinic
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                Open for 2 days{" "}
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                <b>Ticket Owner</b> : Loss{" "}
              </Typography>
            </Box>
            <Box className={classes.cardContent}>
              <Typography variant="h5" className={classes.cardSubHeading}>
                Biomark Platform Access for Nick Clinic
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                Open for 1 Minute{" "}
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                <b>Ticket Owner</b> : Say Hui{" "}
              </Typography>
            </Box>
            <Box className={classes.cardContent}>
              <Typography variant="h5" className={classes.cardSubHeading}>
                Biomark Platform Access for Nick Clinic
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                Open for 1 Minute{" "}
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                <b>Ticket Owner</b> : Say Hui{" "}
              </Typography>
            </Box>
            <Box className={classes.cardContent}>
              <Typography variant="h5" className={classes.cardSubHeading}>
                Biomark Platform Access for Nick Clinic
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                Open for 1 Minute{" "}
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                <b>Ticket Owner</b> : Say Hui{" "}
              </Typography>
            </Box>
          </Box>
        </Card>

        <Card className={classes.card}>
          <Box className={classes.mainHead}>
            <Typography variant="h2" className={classes.cardHeading}>
              Closed
            </Typography>
            <Typography variant="p1" className={classes.cardHeading}>
              2
            </Typography>
          </Box>
          <Box className={classes.cardHeight}>
            <Box className={classes.cardContent}>
              <Typography variant="h5" className={classes.cardSubHeading}>
                Biomark Platform Access for Steph Clinic
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                Open for 3 Minute{" "}
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                <b>Ticket Owner</b> : Say Hui{" "}
              </Typography>
            </Box>
            <Box className={classes.cardContent}>
              <Typography variant="h5" className={classes.cardSubHeading}>
                Biomark Platform Access for Nick Clinic
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                Open for 2 days{" "}
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                <b>Ticket Owner</b> : Loss{" "}
              </Typography>
            </Box>
            <Box className={classes.cardContent}>
              <Typography variant="h5" className={classes.cardSubHeading}>
                Biomark Platform Access for Nick Clinic
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                Open for 1 Minute{" "}
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                <b>Ticket Owner</b> : Say Hui{" "}
              </Typography>
            </Box>
            <Box className={classes.cardContent}>
              <Typography variant="h5" className={classes.cardSubHeading}>
                Biomark Platform Access for Nick Clinic
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                Open for 1 Minute{" "}
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                <b>Ticket Owner</b> : Say Hui{" "}
              </Typography>
            </Box>
            <Box className={classes.cardContent}>
              <Typography variant="h5" className={classes.cardSubHeading}>
                Biomark Platform Access for Nick Clinic
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                Open for 1 Minute{" "}
              </Typography>
              <Typography variant="h6" className={classes.cardParagraph}>
                <b>Ticket Owner</b> : Say Hui{" "}
              </Typography>
            </Box>
        
          </Box>
        </Card>
  */}
      </Box>
    </>
  );
};

export default MarketingCardForSalesAnDFunnel;
