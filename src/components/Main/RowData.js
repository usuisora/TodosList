import React ,{Fragment}from 'react'
import TableCell from '@material-ui/core/TableCell';

function RowData({todo}) {
   const newtodo = Object.entries(todo)

  return (
    <Fragment>
        {console.log(todo)}
        {newtodo.map(column=>{
          return  <TableCell  key = {column[0]} align="right">{column[1]}</TableCell> 
        })}         
    </Fragment>
  )
}

export default RowData
