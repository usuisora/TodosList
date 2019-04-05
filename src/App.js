import React,{useState,useEffect,createContext} from 'react'
import {MyProvider} from './Provider'


  useEffect(()=>{
    console.log('...re-rendering')
    return ()=>{
        console.log('DONE')
    
   }},[])

  const App=() => {
  return (
    <MyProvider>
     <div className="App">

     </div>
    </MyProvider>
  )
  }

export default App
