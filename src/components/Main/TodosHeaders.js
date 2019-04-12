import React,{useState} from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
function TodosHeaders() {
    const [headers] = useState(['id','статус','',"Задача","Описание","Дата выполнения","Важность","теги"]);
   
  return (
    <TableHead >
              <TableRow>
               {headers.map((header,index)=>(
                <TableCell align="left" key = {index}  >{header}</TableCell>   
               ))}
              </TableRow>
            </TableHead>
  )
}

export default TodosHeaders
