import { makeStyles } from "@mui/styles";

export const tableStyles = makeStyles((theme) => ({
  root: {
    // minHeight: "70vh",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  tableContainer: {
    marginTop: theme.spacing(3),
  },
  tableHeader: {
    backgroundColor: theme.palette.textHeadingColor,
    "& .MuiTableCell-head": {
      color: theme.palette.white,
      fontWeight: "700",
    },
  },
  tableBody: {
    "& .MuiTableCell-body": {
      fontSize: "15px",
      fontFamily: ["Mulish", "sans-serif"].join(","),
    },
  },
  pagination: {
    "&.MuiTablePagination-root": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: theme.spacing(2),
    },

    "& .MuiTablePagination-toolbar": {
      padding: 0,
    },

    "& .MuiTablePagination-displayedRows": {
      fontWeight: "700 !important",
      letterSpacing: "2px !important",
      color: theme.palette.textHeadingColor,
    },
  },

  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(3),
  },

  addBtn: {
    "&.MuiButton-root": {
      color: theme.palette.textHeadingColor,
      border: ` 1px solid ${theme.palette.grey[300]}`,
      borderRadius: "43px",
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      fontWeight: "700",
    },
  },

  iconColor: {
    color: `${theme.palette.textGrey}`,
  },

  listIcon: {
    color: "#273859",
    background: "white",
    borderRadius: "2px",
  },

  pdfIcon: {
    color: "gray",
  },

  preTagStyle: {
    fontFamily: "Mulish,sans-serif !important",
  },
}));

export const dataGridStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    minHeight: "50vh",
    height: "70vh",
    maxHeight: "70vh",
    width: "100%",
    // paddingBottom: theme.spacing(2),
  },
  dataGridRoot: {
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: theme.palette.textHeadingColor,
      color: theme.palette.white,
    },

    "& .MuiDataGrid-columnSeparator": {
      opacity: "0 !important",
    },

    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "700",
      fontSize: "16px",
      padding: theme.spacing(1),
    },

    "& .MuiSvgIcon-root": {
      color: theme.palette.white,
    },

    "& .MuiDataGrid-cellContent": {
      fontSize: "15px",
      fontFamily: ["Mulish", "sans-serif"].join(","),
      fontWeight: "500",
    },

    // "& .MuiDataGrid-columnHeadersInner": {
    //   width: "100%",
    //   justifyContent: "space-between",
    // },

    "& .MuiDataGrid-footerContainer": {
      justifyContent: "center",
    },

    "& .MuiTablePagination-actions": {
      "& .MuiButtonBase-root": {
        "& .MuiSvgIcon-root": {
          color: theme.palette.black,
        },
      },
    },

    "& .MuiTablePagination-displayedRows": {
      letterSpacing: theme.spacing(0.5),
      color: theme.palette.grey,
      fontSize: "15px",
      fontWeight: "500",
    },

    "& .MuiDataGrid-selectedRowCount": {
      display: "none",
    },

    "& .MuiDataGrid-cell": {
      "&:focus": {
        outline: "none !important",
      },
      "&:focus-within": {
        outline: "none !important",
      },
    },

    "& .MuiDataGrid-sortIcon": {
      opacity: "1 !important",
    },

    "& .MuiDataGrid-iconButtonContainer": {
      visibility: "visible !important",
    },
  },
}));
