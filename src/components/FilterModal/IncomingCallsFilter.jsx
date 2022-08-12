import React from "react";
import {Button, Popover} from "@material-ui/core";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { filterModalStyle } from "./FilterModalStyle";

const IncomingCallsFilter = ({filterPopover, setPopover, buttonList}) => {
  const classes = filterModalStyle();
  const open = Boolean(filterPopover);

  return (
    <Popover
    anchorEl={filterPopover}
    open={open}
    id={open ? "simple-popover" : undefined}
    onClose={() => {
      setPopover(null);
    }}
    transformOrigin={{
      horizontal: "center",
      vertical: "top",
    }}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    BackdropProps={{ invisible: false }}
    className={classes.sortDialog}
    >
      <h3 className={classes.title}>Sort by</h3>
      <div className={classes.popupButton}>
        {buttonList.map((button, index) => (
          <Button variant="outlined" className={index === 0 ? classes.activeSortButton : classes.sortButton} key={index}>
            <h4>
              {button}
            </h4>
            <KeyboardArrowDownIcon className={index === 0 ? classes.activeArrowDown : classes.arrowDown} />
          </Button>
        ))}
      </div>
      <div>
        <Button variant="outlined" className={classes.selectButton} onClick={() => setPopover(false)}>
          <h4 className={classes.selectButtonText}>Select</h4>
        </Button>
      </div>
    </Popover>
  );
}

export default IncomingCallsFilter;
