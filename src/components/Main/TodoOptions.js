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
function TodoOptions({todosId,classes,style}) {
  return (
    <MyContext.Consumer >
        {({deleteTodo})=>(
            <React.Fragment >
              <TableCell id='editCell'  align="right"  style = {{minWidth: 15}}>
                <Fab variant="extended" size="small" aria-label="Edit" >
                  <EditIcon/>
                </Fab>
              </TableCell>

              <TableCell id='delCell'  align="left" style = {{minWidth: 15}}>
                <Fab variant="extended" size="small" color = 'secondary' aria-label="Del" onClick={()=>deleteTodo(todosId)}>
                  <DelIcon/>
                </Fab>
              </TableCell> 
           </React.Fragment>
        )}
    </MyContext.Consumer>
   
  )
}

export default  withStyles(styles)(TodoOptions)
