import React,{useState} from 'react'

function TodoForm({addTodo}) {
 const [value, setValue] = useState('');
 
 const handleSubmit = (e)=>{
    e.preventDefault()
    if(value !== '')
    addTodo(value)
    setValue('')
 }
 return (
      <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder='next todo...'
        value ={value}
        onChange = {(e)=>{setValue(e.target.value)}}
        />
      </form>
  )
}

export default TodoForm
