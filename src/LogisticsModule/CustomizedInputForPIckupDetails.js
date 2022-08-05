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
    padding: '6px 6px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
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

    },
    '&:selected': {
      borderRadius: '4px',
      border: '1px solid #DAE0EB',


    },
    '&:hover': {
      borderRadius: '4px',
      border: '1px solid #DAE0EB',

    },
  },
});

function CustomizedInputs(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <FormControl className={classes.margin}>

        <InputBase
          id="QTY-[] "
          placeholder="[QTY]"
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
