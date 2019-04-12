import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar ,Fab,Typography} from '@material-ui/core'
import {MyContext} from '../../Provider'
import AddIcon from '@material-ui/icons/Add';

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
            <Fab color="inherit" onClick={()=>setIsSideOpen(true)}>
                <AddIcon/>
            </Fab>
            </Toolbar>
          </AppBar>
        </div>}
</MyContext.Consumer>
   
  )
}

export default withStyles(styles)(Bar)
