import { createStyles, makeStyles } from "@mui/styles";

export const filterModalStyle = makeStyles((theme) =>
  createStyles({
    sortDialog: {
      position: "absolute",
    },

    popupButton: {
      display: "flex",
      padding: "10px 10px",
    },

    sortButton: {
      borderRadius: "40px !important",
      border: "1px solid #e5dbdb !important",
      color: "#565252 !important",
      width: "100px",
      height: "30px",
      marginRight: "10px !important",
      padding: "3px !important",
      justifyContent: "space-around !important",
      textTransform: "capitalize !important"
    },

    activeSortButton: {
      borderRadius: "40px !important",
      border: "1px solid #e5dbdb !important",
      color: "white !important",
      background: "#ed3769 !important",
      width: "100px",
      height: "30px",
      marginRight: "10px !important",
      padding: "3px !important",
      justifyContent: "space-around !important",
      textTransform: "capitalize !important"
    },

    selectButton: {
      borderRadius: "30px !important",
      border: "1px solid #e5dbdb !important",
      color: "white !important",
      background: "#ed3769 !important",
      float: "right",
      width: "100px",
      height: "40px",
      marginTop: "15px !important",
      marginBottom: "15px !important",
      marginRight: "20px !important",
    },

    title: {
      color: "grey",
      padding: "15px 15px 0px 15px",
      fontFamily: "sans-serif",
    },

    selectButtonText: {
      color: "white",
    },

    arrowDown: {
      color: "grey",
    },

    activeArrowDown: {
      color: "white",
    },

  })
);
