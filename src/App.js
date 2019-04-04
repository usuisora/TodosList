import React,{useState,useEffect,createContext} from 'react'
// import Todos from './components/Todos'
// import TodoForm from './components/TodoForm'
import {MyProvider} from './Provider'
// import Family from './components/Family'
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
    
   }},[])

  return (
    <MyProvider>
      
    </MyProvider>
  )
}

export default App
