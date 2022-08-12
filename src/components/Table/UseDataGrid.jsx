import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { dataGridStyles } from "./useTableStyles";

const UseDataGrid = (props) => {
  const classes = dataGridStyles();
  // const { columns, rows, rowsLength } = props;
  const { columns, rows } = props;

  return (
    <Box className={classes.root}>
      <DataGrid
        className={classes.dataGridRoot}
        // pageSize={rowsLength ? rowsLength : 5}
        autoPageSize={true}
        columns={columns}
        rows={rows}
        disableColumnMenu={true}
      />
    </Box>
  );
};
export default UseDataGrid;
