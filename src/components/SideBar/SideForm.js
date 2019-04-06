import React from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles,createStyles} from '@material-ui/core/styles';
import { Divider , Button, FormControl, InputLabel, FormLabel, RadioGroup,FormControlLabel,Radio} from '@material-ui/core';

const styles = theme =>createStyles({
   field:{
       width: '80%',
       padding: '10'
   },
   textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    }, 
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
})
function SideForm({classes}) {

    const handleChange  =()=>{
        console.log('change')
    }
  return (
   <form  className = {classes.root}>
        <TextField  className = {classes.field}
          id="standard-name"
          label="Заголовок задачи"
          margin="normal"
        />

        <TextField className = {classes.field}
          label="Описание задачи"
          multiline
          rowsMax="4"
          margin="normal"
        />
        
        <TextField
        id="date"
        label="Дата выполнения"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}/>

        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Важность</FormLabel>
          <RadioGroup
            aria-label="importance"
            className={classes.group}
            value={'неважно'}
            onChange={handleChange}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
       
       <Divider/>
    
    </form>
  )
}

export default withStyles(styles)(SideForm)
