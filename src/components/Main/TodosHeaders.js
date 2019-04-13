import React,{useState} from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
function TodosHeaders() {
    const [headers] = useState(['ID','Cтатус',"Задача","Описание","Дата выполнения","Важность","теги","",""]);
   
  return (
    <TableHead >
              <TableRow style = {{backgroundColor : '#eee'  }}>
               {headers.map((header,index)=>(
                <TableCell align="center" key = {index}  style = {{height: 45}}>{header.toUpperCase()}</TableCell>   
               ))}
              </TableRow>
            </TableHead>
  )
}

export default TodosHeaders
