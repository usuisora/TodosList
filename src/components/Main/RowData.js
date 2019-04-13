import React ,{Fragment}from 'react'
import TableCell from '@material-ui/core/TableCell';
import TodoOptions from './TodoOptions'
import LongMenu from './LongMenu'
import {MyContext} from '../../Provider'




export function Drop(props) {
  const {todo,status} = props 
  return (
    <MyContext.Consumer>
      {({setTodoStatus})=>
        <TableCell align = 'center'>
            <LongMenu  status = {status} setTodoStatus = {setTodoStatus} todoid = {todo.id}/>
        </TableCell>        
      }
    </MyContext.Consumer>

  )
}


function RowData({todo,classes,rowStyle}) {
  //  const newtodo = Object.entries(todo)
  //  console.log('mylog',todo)
  return (
    <Fragment  >
      <TableCell  align='center'>{todo.id}</TableCell> 
      <Fragment>
                  <Drop todo = {todo}  status = {todo.isCompleted} />
      </Fragment>   
      <TableCell  align='center'>{todo.name}</TableCell> 
      <TableCell  align='center'>{todo.description}</TableCell> 
      <TableCell  align='center'>{todo.date}</TableCell> 
      <TableCell  align='center'>{todo.importance}</TableCell> 
      <TableCell  align='center'>{todo.tegs}</TableCell> 
      <TodoOptions todosId = {todo.id} rowStyle ={rowStyle} />
    </Fragment>
  )
}

export default (RowData)
