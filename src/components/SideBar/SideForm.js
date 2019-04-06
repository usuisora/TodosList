import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles,createStyles} from '@material-ui/core/styles';
import { Divider , FormControl, FormLabel, RadioGroup,FormControlLabel,Radio} from '@material-ui/core';
import TegsField from './TegsField'

const styles = theme =>createStyles({
    root: {
        display: 'flex',
        // flexWrap: 'wrap',
        flexDirection: 'column',
        padding: 20,
        overflow:'auto',
        height:'65%'
    }, 
    formControl: {
      margin: 12
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
        
    }
})
function SideForm({classes,importance}) {
    const initDate = new Date().toISOString().substring(0,10)
    const [newtodo, setNewtodo] = useState([
      {name:''},
      {description:''},
      {date:initDate},
      {importance:importance[0].name},
      {tegs:''}
    ]);
    
    const handleChange=({target:{value,id}})=>{
       console.log(value,id)
       setNewtodo({...newtodo,[id]:value})
    }
  return (
   <form  className = {classes.root}>
        <TextField  
          id="name"
          label="Заголовок задачи"
          margin="normal"
          onChange={handleChange}
        />
        <TextField 
          id='description'
          label="Описание задачи"
          multiline
          rowsMax="4"
          margin="normal"
          onChange={handleChange}
        />
        <TextField
        id="date"
        label="Дата выполнения"
        type="date"
        defaultValue={initDate}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}/>
        
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Важность</FormLabel>
            <RadioGroup
            id = "importance"
              className={classes.group}
              value={newtodo.importance}
              onChange={handleChange}
            >
              {
                importance.map(el =>{
                  return (<FormControlLabel value={el.name} control={<Radio />} label={el.name}  />)       
              })
              }         
            </RadioGroup>
        </FormControl>
         
         <TegsField/>
    </form>
  )
}

export default withStyles(styles)(SideForm)
