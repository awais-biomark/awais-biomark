import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import {
  Box,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

const styles = makeStyles((theme) => ({
  root: {
    position: "absolute",
  },
  notifiactionBox: {
    padding: theme.spacing(2),
    width: "30vw",
    backgroundColor: theme.palette.white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    boxShadow: "0px 10px 40px -20px rgba(56, 73, 107, 0.2)",
    borderRadius: "8px",
  },
  heading: {
    margin: `${theme.spacing(1)} 0 !important`,
    fontSize: "25px !important",
    fontWeight: "700 !important",
    color: `${theme.palette.textGrey}`,
  },
  filterDropDownMange: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "30px !important",
  },
  dropDown: {
    width: "110px",
  },
  selectStyle: {
    borderRadius: "30px !important",
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  btn: {
    backgroundColor: `${theme.palette.secondaryColor} !important`,
    color: `${theme.palette.white} !important`,
    borderRadius: "44px !important",
    fontWeight: "600 !important",
    paddingLeft: `${theme.spacing(3)} !important`,
    paddingRight: `${theme.spacing(3)} !important`,
    marginTop: `${theme.spacing(2)} !important`,
  },
}));

const Filter = (props) => {
  const classes = styles();
  const { top, left, setOpenfilterModal } = props;

  return (
    <Box
      className={classes.root}
      style={{
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
      }}
    >
      <Box className={classes.notifiactionBox}>
        <Typography className={classes.heading}>Sort by</Typography>
        <Box className={classes.filterDropDownMange}>
          <FormControl className={classes.dropDown}>
            <Select
              MenuProps={{
                sx: {
                  "&& .Mui-selected": {
                    backgroundColor: "pink",
                  },
                },
              }}
              defaultValue="Options"
              IconComponent={KeyboardArrowDownIcon}
              className={classes.selectStyle}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Options">Time</MenuItem>
              <MenuItem value="a">Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.dropDown}>
            <Select
              defaultValue="Options"
              IconComponent={KeyboardArrowDownIcon}
              className={classes.selectStyle}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Options">Status</MenuItem>
              <MenuItem value="a">Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.dropDown}>
            <Select
              IconComponent={KeyboardArrowDownIcon}
              defaultValue="Options"
              className={classes.selectStyle}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Options">Duration</MenuItem>
              <MenuItem value="a">Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.dropDown}>
            <Select
              IconComponent={KeyboardArrowDownIcon}
              defaultValue="Options"
              className={classes.selectStyle}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Options">Requrest</MenuItem>
              <MenuItem value="a">Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className={classes.btnContainer}>
          <Button
            onClick={() => setOpenfilterModal(false)}
            className={classes.btn}
          >
            Select
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Filter;
