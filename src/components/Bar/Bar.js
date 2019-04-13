import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar ,IconButton,Typography} from '@material-ui/core'
import {MyContext} from '../../Provider'
import AddIcon from '@material-ui/icons/Add';

const styles = theme =>({
    root: {
      flexGrow: 1
    },
    title: {
      // display: 'none',
      // [theme.breakpoints.up('sm')]: {
        display: 'block'
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    }
  })
function Bar({classes}) {
    // const { classes } = props;
  return (
<MyContext.Consumer>{
  ({setIsSideOpen})=> 
      <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
               <Typography  variant="h6" color="inherit"   className={classes.title}>
                  Список задач
                </Typography>
                <div className={classes.grow}/>
                <IconButton color="inherit" onClick={()=>setIsSideOpen(true)}>
                    <AddIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>}
  </MyContext.Consumer> )
}


export default withStyles(styles)(Bar)
