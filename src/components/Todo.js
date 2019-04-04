import React from 'react'

function Todo({todo,index,completeTodo,removeTodo}) {
  return (
    <div className ='todo-conteiner' style = {
        {
            textDecoration : todo.isCompleted ? 'line-through':''
        }
    }>
      <div className = 'todo-text'>{todo.text}</div>
      <button className='todo-button' onClick = {()=>completeTodo(index)}>Complete</button>
      <button className='todo-button' onClick = {()=>removeTodo(index)}>Remove</button>
    </div>
  )
}

export default Todo
