import React ,{Fragment}from 'react'
import TableCell from '@material-ui/core/TableCell';
import TodoOptions from './TodoOptions'


function RowData({todo,classes}) {
   const newtodo = Object.entries(todo)
   
  return (
    <Fragment >
        {newtodo.map(column=>{
          if(column[0]==='isCompleted')
              return (
                <Fragment>
                   <TableCell  key = {column[0]} align="right">{column[1]===true? "Выполнено":"Не выполнено"}</TableCell> 
                </Fragment>
              )
          return  <TableCell  key = {column[0]} align="right">{column[1]}</TableCell> 
        })}     
         
        <TodoOptions todosId = {todo.id} />
    </Fragment>
  )
}

export default (RowData)
