import React,{useState,useEffect,createContext} from 'react'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'
import {MyProvider} from './Provider'
import Family from './components/Family'
function App() {
 
 
  const  [todos,setTodos]=useState([
      {text:'Meet with a friend', isCompleted: false},
      {text:'Learn some react', isCompleted: false},
      {text:'Make food', isCompleted: false}
  ])

  useEffect(()=>{
    console.log('...re-rendering')
    return ()=>{
        console.log('DONE')
    }
   },[todos])

  const addTodo = (text) =>{
      var newTodos = [...todos, {text} ];
      setTodos(newTodos)
  }
  const removeTodo =(index)=>{
      const newTodos =[...todos];
      newTodos.splice(index,1);
      setTodos(newTodos)
  }
  const completeTodo = index =>{
      const newTodos = [...todos]
      newTodos[index].isCompleted = true
      setTodos(newTodos)
  }
  return (
    <MyProvider>
     <Family/>
      <Todos todos = {todos} completeTodo = {completeTodo} removeTodo={removeTodo}/>
      <TodoForm addTodo={addTodo}/>
    </MyProvider>
  )
}

export default App
