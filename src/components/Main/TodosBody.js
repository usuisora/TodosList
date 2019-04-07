import React,{Fragment,useState} from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import {MyContext} from '../../Provider'
import RowData from './RowData'

function Row({todo}) {
  const [rowStyle, setRowStyle] = useState({
    display: 'none'
  });
  return(
    <TableRow  onMouseOver = {()=>setRowStyle({})} onMouseLeave = {()=>setRowStyle({display:'none'})}>  
                      <RowData todo={todo} rowStyle = {rowStyle} />
                </TableRow>
  )
}
function TodosBody() {
 


  return (
   <MyContext.Consumer>
        {({todos})=>(        
            <TableBody>
                {console.log(todos)}
              {todos.map(todo => (
                <Fragment key={todo.id}>
                   <Row todo={todo}/>
                </Fragment>
              ))}
            </TableBody>
        )}
   </MyContext.Consumer>
  )
}

export default TodosBody
