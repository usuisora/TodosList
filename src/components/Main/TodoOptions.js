import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import { Fab } from '@material-ui/core';
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
  }
});
function TodoOptions({todosId,classes,style,rowStyle}) {
  return (
    <MyContext.Consumer >
        {({deleteTodo,editTodo})=>(
            <React.Fragment >
              <TableCell  style = {{minWidth:40}} >
                <Fab  size="small" style = {rowStyle} aria-label="Edit" onClick={()=>editTodo(todosId)} >
                  <EditIcon/>
                </Fab>
              </TableCell>

              <TableCell align="center" style = {{minWidth: 40}}>
                <Fab  size="small" style = {rowStyle} color = 'secondary' aria-label="Del" onClick={()=>deleteTodo(todosId)}>
                  <DelIcon/>
                </Fab>
              </TableCell> 
           </React.Fragment>
        )}
    </MyContext.Consumer>
   
  )
}

export default  withStyles(styles)(TodoOptions)
