import React from 'react'
import {Table,Paper} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TodosHeaders from './TodosHeaders';
import TodosBody from './TodosBody'
import Alert from '../Alert'

const styles = theme => ({
    root: {
      width: '95%',
      // marginTop: theme.spacing.unit * 3,
      marginLeft: 'auto',
      marginRight: 'auto',
      overflowX: 'auto'
    },
    table: {
      minWidth: '100%',
    }
  });

function TodosTable({classes}) {
    return (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TodosHeaders/>
            <TodosBody/>
          </Table>

          <Alert/>
        </Paper>
      );
}

export default withStyles(styles)(TodosTable)
