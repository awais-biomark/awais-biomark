import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import FilterListIcon from "@mui/icons-material/FilterList";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button, IconButton, TablePagination } from "@mui/material";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import { tableStyles } from "./useTableStyles";

const UseTable = (props) => {
  const {
    tableHeader,
    showAddBtn,
    setPopover,
    setOpenfilterModal,
    consumablesFlag,
  } = props;
  const classes = tableStyles();

  const getStripedStyle = (index) => {
    return { background: index % 2 ? "#fafafa" : "white" };
  };

  const [page, setPage] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div className={classes.root}>
      <TableContainer
        component={Paper}
        elevation={1}
        className={classes.tableContainer}
      >
        <Table>
          <TableHead className={classes.tableHeader}>
            <TableRow>
              {tableHeader.map((item, i) => {
                return item === "filterIcon" ? (
                  <TableCell key={i}>
                    <IconButton onClick={() => setOpenfilterModal(true)}>
                      <FilterListIcon style={{ color: "white" }} />
                    </IconButton>
                  </TableCell>
                ) : item === "CRMfilterIcon" ? (
                  <TableCell key={i}>
                    <IconButton
                      onClick={(event) => {
                        setPopover(event.currentTarget);
                      }}
                    >
                      <FilterListIcon className={classes.listIcon} />
                    </IconButton>
                  </TableCell>
                ) : (
                  <TableCell key={i}>{item}</TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {tableHeader
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow
                  key={index}
                  className={classes.tableRow}
                  style={{ ...getStripedStyle(index) }}
                >
                  {/* <TableCell>{row}</TableCell> */}
                  {tableHeader.map((item, i) => {
                    return item === "filterIcon" ? (
                      <TableCell key={i}>
                        <IconButton>
                          <ChevronRightIcon style={{ color: "grey" }} />
                        </IconButton>
                      </TableCell>
                    ) : item === "CRMfilterIcon" ? (
                      <TableCell key={i} />
                    ) : (
                      <TableCell key={i}>{item}</TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {showAddBtn && (
        <div className={classes.btnContainer}>
          <Button
            color="primary"
            endIcon={<AddCircleSharpIcon className={classes.iconColor} />}
            className={classes.addBtn}
          >
            Add Riders
          </Button>
        </div>
      )}

      {!consumablesFlag && (
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={tableHeader.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          className={classes.pagination}
        />
      )}
    </div>
  );
};

export default UseTable;
