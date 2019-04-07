import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar ,Button,Typography, IconButton} from '@material-ui/core'
import {MyContext} from '../../Provider'

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };
function Bar({classes}) {
    // const { classes } = props;
  return (
<MyContext.Consumer>{
  ({setIsSideOpen})=> 
      <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Список задач
              </Typography>
            <Button  color="inherit" onClick={()=>setIsSideOpen(true)}>
                Добавить
            </Button>
            </Toolbar>
          </AppBar>
        </div>}
</MyContext.Consumer>
   
  )
}

export default withStyles(styles)(Bar)
