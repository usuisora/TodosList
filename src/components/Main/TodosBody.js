import React from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import {MyContext} from '../../Provider'
import RowData from './RowData'
function TodosBody() {
  return (
   <MyContext.Consumer>
        {(todos)=>(        
            <TableBody>
                {console.log(todos)}
              {todos.map(todo => (
                <TableRow key={todo.id}>
                    <RowData todo={todo}/>
                </TableRow>
              ))}
            </TableBody>
        )}
   </MyContext.Consumer>
  )
}

export default TodosBody
