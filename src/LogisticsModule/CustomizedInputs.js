import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    borderRadius: 4,
  },
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: '4px',
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '0',
    fontSize: '13px',
    fontWeight: '400',
    color: '#455066',
    lineheight: '16px',
    width: '120px',
    padding: '3px',
    backgroundColor: '#EBEFF5',

    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: '4px',
      border: '1px solid #DAE0EB',
      padding: '2px'
    },
    '&:selected': {
      borderRadius: '4px',
      border: '1px solid #DAE0EB',
      padding: '2px'
    },
    '&:hover': {
      borderRadius: '4px',
      border: '1px solid #DAE0EB',
      padding: '2px'
    },

  },
});

function CustomizedInputs(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <FormControl className={classes.margin}>

        <InputBase sx={{ '& .MuiInputBase-root ': { color: '#455066' } }}
          id="QTY-[] "
          placeholder="[QTY]/ [Qty]"
          classes={{
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          }}
        />
      </FormControl>

    </div>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputs);
