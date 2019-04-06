import React ,{Fragment}from 'react'
import TableCell from '@material-ui/core/TableCell';
import TodoOptions from './TodoOptions'


function RowData({todo,classes}) {
   const newtodo = Object.entries(todo)
   
  return (
    <Fragment >
        {newtodo.map(column=>{
          return  <TableCell  key = {column[0]} align="right">{column[1]}</TableCell> 
        })}     
         
        <TodoOptions todosId = {todo.id} />
    </Fragment>
  )
}

export default (RowData)
