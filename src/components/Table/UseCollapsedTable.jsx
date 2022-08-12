/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  root: {},
  tableCell: {
    "&.MuiTableCell-root": {
      paddingLeft: theme.spacing(8),
      color: theme.palette.textHeadingColor,
      fontWeight: "400",
      fontSize: "15px",
      textTransform: "capitalize",
    },
  },
  tableRoot: {
    "&:MuiTable-root": {},
  },

  tableContainer: {
    "&.MuiTableContainer-root": {
      width: "100%",
      minWidth: "100%",
      height: "60vh",
      marginTop: theme.spacing(2),
    },
  },
  tableHeader: {
    backgroundColor: theme.palette.textHeadingColor,
    "& .MuiTableCell-head": {
      color: theme.palette.white,
      fontWeight: "700",
    },
  },
  checkedCheckBox: {
    "&.MuiCheckbox-root.Mui-checked": {
      color: theme.palette.textHeadingColor,
    },
  },
  tableCellHeading: {
    "&.MuiTableCell-root": {
      fontWeight: "700",
      fontSize: "20px",
      color: theme.palette.textHeadingColor,
      textTransform: "capitalize",
    },
  },

  checkboxClassThird: {
    "&.MuiCheckbox-root": {
      width: "80%",
      // margin: "auto",
    },
  },
}));

function createData(name, details) {
  return {
    name,
    details,
  };
}

function Row(props) {
  const {
    row,
    state,
    checkboxHandle,
    handleHeadingCheckbox,
    mainHeadingCheckbox,
  } = props;
  const [open, setOpen] = React.useState(false);
  const classes = styles();

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell
          className={classes.tableCellHeading}
          component="th"
          scope="row"
          width={"40%"}
        >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          {row.name.split("_")[0]}
        </TableCell>
        <TableCell width={"20%"}>
          <Checkbox
            checked={mainHeadingCheckbox[row.name]?.index ? true : false}
            onClick={(event) =>
              handleHeadingCheckbox(row.name, "index", event.target.checked)
            }
          />
        </TableCell>
        <TableCell width={"20%"}>
          <Checkbox
            checked={mainHeadingCheckbox[row.name]?.create ? true : false}
            onClick={(event) =>
              handleHeadingCheckbox(row.name, "create", event.target.checked)
            }
          />
        </TableCell>
        <TableCell width={"20%"}>
          <Checkbox
            checked={mainHeadingCheckbox[row.name]?.update ? true : false}
            onClick={(event) =>
              handleHeadingCheckbox(row.name, "update", event.target.checked)
            }
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  {Object.entries(row.details).map((detail, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell className={classes.tableCell} width={"39%"}>
                          {detail[0].split("_").join(" ")}
                        </TableCell>
                        {Object.entries(detail[1]).map((checkbox, index1) => {
                          return (
                            (checkbox[0] === "index" ||
                              checkbox[0] === "create" ||
                              checkbox[0] === "update") && (
                              <TableCell
                                key={index1}
                                width={
                                  checkbox[0] === "index"
                                    ? "22%"
                                    : checkbox[0] === "create" && "20%"
                                }
                              >
                                <Checkbox
                                  value={checkbox[0]}
                                  checked={
                                    state[row.name][detail[0]][checkbox[0]]
                                  }
                                  className={
                                    checkbox[0] === "update"
                                      ? classes.checkboxClassThird
                                      : ""
                                  }
                                  onChange={() =>
                                    checkboxHandle(
                                      row.name,
                                      detail[0],
                                      checkbox[0]
                                    )
                                  }
                                />
                              </TableCell>
                            )
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableHead>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function UseCollapsedTable({ setGetPermission, permissionForTable }) {
  const classes = styles();
  const [permission, setPermission] = useState();
  const [mainHeadingCheckbox, setMainHeadingCheckbox] = useState({});

  useEffect(() => {
    let test = {};
    Object.keys(permissionForTable).map((entry) => {
      test[entry] = { index: false, create: false, update: false };
    });
    Object.keys(permissionForTable).forEach((entry) => {
      let indexValues = [];
      let createValues = [];
      let updateValues = [];
      Object.values(permissionForTable[entry]).forEach((obj) => {
        indexValues.push(obj.index);
        createValues.push(obj.create);
        updateValues.push(obj.update);
      });
      test[entry].index = indexValues.every((element) => element)
        ? true
        : false;
      test[entry].create = createValues.every((element) => element)
        ? true
        : false;
      test[entry].update = updateValues.every((element) => element)
        ? true
        : false;
    });
    setMainHeadingCheckbox({ ...test });
    setPermission({ ...permissionForTable });
  }, [permissionForTable]);

  useEffect(() => {
    setGetPermission({ access: permission });
  }, [permission, setGetPermission]);

  const handleCheckboxClick = (mainHeading, subHeading, checkboxValue) => {
    let categoryPermissionValues = Object.values(permission[mainHeading]).map(
      (element) => {
        return element[checkboxValue];
      }
    );
    let categorySubheadingIndex = Object.keys(permission[mainHeading]).indexOf(
      subHeading
    );
    categoryPermissionValues.splice(categorySubheadingIndex, 1);
    if (categoryPermissionValues.every((element) => element)) {
      setMainHeadingCheckbox((prevState) => ({
        ...prevState,
        [mainHeading]: {
          ...prevState[mainHeading],
          [checkboxValue]: true,
        },
      }));
    }
    if (checkboxValue === "index") {
      setPermission((prevState) => ({
        ...prevState,
        [mainHeading]: {
          ...prevState[mainHeading],
          [subHeading]: {
            ...prevState[mainHeading][subHeading],
            index: !permission[mainHeading][subHeading].index,
            show: !permission[mainHeading][subHeading].show,
          },
        },
      }));
      if (
        mainHeadingCheckbox[mainHeading][checkboxValue] === true &&
        !permission[mainHeading][subHeading].index === false
      ) {
        setMainHeadingCheckbox((prevState) => ({
          ...prevState,
          [mainHeading]: {
            ...prevState[mainHeading],
            index: false,
          },
        }));
      }
    } else if (checkboxValue === "update") {
      setPermission((prevState) => ({
        ...prevState,
        [mainHeading]: {
          ...prevState[mainHeading],
          [subHeading]: {
            ...prevState[mainHeading][subHeading],
            update: !permission[mainHeading][subHeading].update,
            destroy: !permission[mainHeading][subHeading].destroy,
          },
        },
      }));
      if (
        mainHeadingCheckbox[mainHeading][checkboxValue] === true &&
        !permission[mainHeading][subHeading].update === false
      ) {
        setMainHeadingCheckbox((prevState) => ({
          ...prevState,
          [mainHeading]: {
            ...prevState[mainHeading],
            update: false,
          },
        }));
      }
    } else {
      setPermission((prevState) => ({
        ...prevState,
        [mainHeading]: {
          ...prevState[mainHeading],
          [subHeading]: {
            ...prevState[mainHeading][subHeading],
            [checkboxValue]:
              !permission[mainHeading][subHeading][checkboxValue],
          },
        },
      }));
      if (
        mainHeadingCheckbox[mainHeading][checkboxValue] === true &&
        !permission[mainHeading][subHeading].create === false
      ) {
        setMainHeadingCheckbox((prevState) => ({
          ...prevState,
          [mainHeading]: {
            ...prevState[mainHeading],
            create: false,
          },
        }));
      }
    }
  };

  const handleHeadingCheckbox = (mainHeading, field, checkStatus) => {
    let data = permission;
    let subHeadings = Object.keys(data[mainHeading]);

    subHeadings.forEach((subHeading) => {
      if (field === "index") {
        data[mainHeading][subHeading].index = checkStatus;
        data[mainHeading][subHeading].show = checkStatus;
      } else if (field === "update") {
        data[mainHeading][subHeading].update = checkStatus;
        data[mainHeading][subHeading].destroy = checkStatus;
      } else {
        data[mainHeading][subHeading].create = checkStatus;
      }
    });
    setPermission({ ...data });
    setMainHeadingCheckbox((prevState) => ({
      ...prevState,
      [mainHeading]: {
        ...prevState[mainHeading],
        [field]: checkStatus,
      },
    }));
  };

  const rows = [];
  Object.entries(permission ? permission : []).map((entry) => {
    rows.push(createData(entry[0], entry[1]));
  });

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table aria-label="collapsible table">
        <TableHead className={classes.tableHeader}>
          <TableRow>
            <TableCell>MODULE PAGE NAME</TableCell>
            <TableCell>VIEW</TableCell>
            <TableCell>CREATE</TableCell>
            <TableCell>EDIT/DELETE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row
              className={classes.checkedCheckBox}
              key={row.name}
              row={row}
              state={permission}
              checkboxHandle={handleCheckboxClick}
              handleHeadingCheckbox={handleHeadingCheckbox}
              mainHeadingCheckbox={mainHeadingCheckbox}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default UseCollapsedTable;
