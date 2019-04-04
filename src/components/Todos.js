import React from 'react'
import Todo from './Todo'
function Todos({todos,completeTodo,removeTodo}) {
  return (
    <div className = 'todos'>
      { todos.map((item,index)=>{
           return (<Todo todo ={item}  key = {index} index = {index} completeTodo={completeTodo} removeTodo={removeTodo}/>)

       }
      )
      }
       
    </div>
  )
}

export default Todos
