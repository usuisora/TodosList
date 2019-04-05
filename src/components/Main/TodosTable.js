import React from 'react'
import {Table,Paper} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TodosHeaders from './TodosHeaders';

const styles = theme => ({
    root: {
      width: '85%',
      marginTop: theme.spacing.unit * 3,
      marginLeft: 'auto',
      marginRight: 'auto',
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    }
  });

  let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
function TodosTable({classes}) {

    return (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TodosHeaders/>
           
          </Table>
        </Paper>
      );
}

export default withStyles(styles)(TodosTable)
