import React,{useState, Fragment} from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles,createStyles} from '@material-ui/core/styles';
import { Divider , FormControl, FormLabel, RadioGroup,FormControlLabel,Radio, Button,InputAdornment} from '@material-ui/core';
import TegsField from './TegsField'
import DoneIcon from '@material-ui/icons/Done';
import DescIcon from '@material-ui/icons/Description';
import TimeIcon from '@material-ui/icons/AccessTime';
import CircularProgress from '@material-ui/core/CircularProgress';

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
    },
    progress : {
      marginLeft: 'auto' ,
      marginRight: 'auto' 
    }
})


function SideForm({classes,importance, addTodo,setIsSideOpen,initTodo,setOpenSnack}) {
    const initDate = new Date().toISOString().substring(0,10)
    
    const [newtodo, setNewtodo] = useState(initTodo);
    const [progressStyle, setProgressStyle] = useState({
      display: "none"
    });
    


    const handleChange=({target:{value,name}})=>{
      if(name === 'todo'){
         setNewtodo({...newtodo,name:value})
      }
      else{
        setNewtodo({...newtodo,[name]:value})

      }
    }
  return (
    <Fragment>
    <form  className = {classes.root}>

          <TextField  
            name="todo"
            multiline
            rowsMax="1"
            label="Заголовок задачи"
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
        
        <Button  color="primary" onClick={()=>{
          console.log('new',newtodo)
                                                  if(newtodo.name ==null){
                                                    alert('Введите пожалуйта задачу')
                                                    
                                                  }
                                                  else{
                                                    addTodo(newtodo);
                                                  setTimeout(()=>{
                                                     setIsSideOpen(false);
                                                  },2000)
                                                  setProgressStyle({
                                                    marginLeft: 'auto' ,
                                                    marginRight: 'auto' 
                                                  })     
                                                  }
                                                                                     
                                               }} 
                                                  >Сохранить</Button>
        <Button  color="secondary" onClick={()=>{setIsSideOpen(false);setOpenSnack(false)}}>Отмена</Button>
        <CircularProgress style= {progressStyle} />

</Fragment>
  )
}

export default withStyles(styles)(SideForm)
