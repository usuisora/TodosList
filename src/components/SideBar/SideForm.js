import React,{useState, useEffect,Fragment} from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles,createStyles} from '@material-ui/core/styles';
import { Divider , FormControl, FormLabel, RadioGroup,FormControlLabel,Radio, Button,InputAdornment} from '@material-ui/core';
import TegsField from './TegsField'
import AccountCircle from '@material-ui/icons/AccountCircle';
import DoneIcon from '@material-ui/icons/Done';
import DescIcon from '@material-ui/icons/Description';
import TimeIcon from '@material-ui/icons/AccessTime';


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
        margin: 0
        
    }
})
function SideForm({classes,importance, addTodo,setIsSideOpen,initTodo}) {
    const initDate = new Date().toISOString().substring(0,10)
    
    const [newtodo, setNewtodo] = useState(initTodo);
    


    const handleChange=({target:{value,name}})=>{
     setNewtodo({...newtodo,[name]:value})
    }
  return (
    <Fragment>
    <form  className = {classes.root}>

          <TextField  
            name="name"
            label="Заголовок задачи"
            margin="normal"
            value={newtodo.name}
            onChange={handleChange}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DoneIcon />
                  </InputAdornment>
                )}}
          />
          <TextField 
            name='description'
            label="Описание задачи"
            multiline
            rowsMax="4"
            margin="normal"
            value={newtodo.description}
            onChange={handleChange}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DescIcon/>
                  </InputAdornment>
                )}}
            
          />
          <TextField
            name="date"
            label="Дата выполнения"
            type="date"
            required
            defaultValue={initDate}
            onChange={handleChange}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TimeIcon />
                  </InputAdornment>
                )}}
            InputLabelProps={{
              shrink: true,
          }}/>
          
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Важность</FormLabel>
              <RadioGroup
                value={newtodo.importance}
                onChange={handleChange}
                id = 'importance'
                name= 'importance'
                className={classes.group}
                
              >
                {
                  importance.map(el =>{
                    return (<FormControlLabel id = {el.id} key = {el.id} value={el.name} control={<Radio />} label={el.name}  />)       
                })
                }         
              </RadioGroup>
          </FormControl>
          
          <TegsField newtodo = {newtodo} setNewtodo = {setNewtodo}/>
      </form>
     <Divider/>
        <Button  color="primary" onClick={()=>{addTodo(newtodo);setIsSideOpen(false)}} >Save</Button>
        <Button  color="secondary" onClick={()=>setIsSideOpen(false)}>Cancel</Button>
</Fragment>
  )
}

export default withStyles(styles)(SideForm)
