import React from 'react'
import {Table,Paper} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TodosHeaders from './TodosHeaders';
import TodosBody from './TodosBody'

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

function TodosTable({classes}) {
    return (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TodosHeaders/>
            <TodosBody/>
          </Table>
        </Paper>
      );
}

export default withStyles(styles)(TodosTable)
