import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import {  IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import {MyContext} from '../../Provider'
import DelIcon from '@material-ui/icons/Delete';
import { withStyles,createStyles } from '@material-ui/core/styles';

const styles = createStyles({
  hidden: {
    display: 'none'
  },
  'hidden:hover':{
    display: 'none'
  },
  notHidden:{
    display:'inherit'
  },
  rowStyle:{
    display: 'inline'
  },
  cell:{
    minWidth:40,
    padding: 0,
    }

});
function TodoOptions({todosId,classes,style,rowStyle}) {
  return (
    <MyContext.Consumer >
        {({deleteTodo,editTodo})=>(
            <React.Fragment >
              <TableCell align='left' className ={classes.cell} >
                <IconButton  align='center' size="small" style = {rowStyle} aria-label="Edit" onClick={()=>editTodo(todosId)} >
                  <EditIcon/>
                </IconButton>

              </TableCell>
              <TableCell align='right' className ={classes.cell} >
              <IconButton  size="small" style = {rowStyle} aria-label="Del" onClick={()=>deleteTodo(todosId)}>
                  <DelIcon/>
                </IconButton>
              </TableCell>
           </React.Fragment>
        )}
    </MyContext.Consumer>
   
  )
}

export default  withStyles(styles)(TodoOptions)
