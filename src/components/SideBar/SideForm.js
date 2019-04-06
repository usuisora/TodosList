import React,{useState, Fragment} from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles,createStyles} from '@material-ui/core/styles';
import { Divider , FormControl, FormLabel, RadioGroup,FormControlLabel,Radio, Button} from '@material-ui/core';
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
        margin: 0
        
    }
})
function SideForm({classes,importance, addTodo,setIsSideOpen}) {
    const initDate = new Date().toISOString().substring(0,10)
    
    const [tegs, setTegs] = useState('');
    const [newtodo, setNewtodo] = useState([
      {name:''},
      {description:''},
      {date:initDate},
      {importance:importance[0].name},
      {tegs: tegs}
    ]);
    const handleChange=({target:{value,id}})=>{
       console.log(value,id)
       setNewtodo({...newtodo,[id]:value})
    }
  return (
    <Fragment>
    <form  className = {classes.root}>
          <TextField  
            id="name"
            label="Заголовок задачи"
            margin="normal"
            required
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
          required
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
                    return (<FormControlLabel key = {el.id} value={el.name} control={<Radio />} label={el.name}  />)       
                })
                }         
              </RadioGroup>
          </FormControl>
          
          <TegsField  setTegs ={setTegs}/>
      </form>
     <Divider/>
        <Button  color="primary" onClick={()=>addTodo(newtodo)} >Save</Button>
        <Button  color="secondary" onClick={()=>setIsSideOpen(false)}>Cancel</Button>
</Fragment>
  )
}

export default withStyles(styles)(SideForm)
