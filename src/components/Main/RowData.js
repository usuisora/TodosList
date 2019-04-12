import React ,{Fragment}from 'react'
import TableCell from '@material-ui/core/TableCell';
import TodoOptions from './TodoOptions'
import LongMenu from './LongMenu'
import {MyContext} from '../../Provider'




export function Drop(props) {
  const {todo} = props 
  return (
    <MyContext.Consumer>
      {({setTodoStatus})=>
        <TableCell   align="left">  <LongMenu   setTodoStatus ={setTodoStatus} todoid = {todo.id}/> </TableCell>        
      }
    </MyContext.Consumer>

  )
}


function RowData({todo,classes,rowStyle}) {
   const newtodo = Object.entries(todo)

  return (
    <Fragment  >
        {newtodo.map(column=>{
          if(column[0]==='isCompleted')
              return (
                <Fragment key = {column[0]}>
                   <TableCell align="left" >{column[1]===true? "Выполнено":"Не выполнено"}  </TableCell> 
                  <Drop todo = {todo}/>
                </Fragment>
              )
          return  <TableCell  align="left" key = {column[0]}>{column[1]}</TableCell> 
        })}     
        <TodoOptions todosId = {todo.id} rowStyle ={rowStyle} />
    </Fragment>
  )
}

export default (RowData)
