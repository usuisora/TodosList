import React from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {MyContext} from '../../Provider'
function TodosBody() {
  return (
   <MyContext.Consumer>
        {}
   </MyContext.Consumer>
  )
}

export default TodosBody
