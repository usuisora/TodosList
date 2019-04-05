import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar ,Button,Typography, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
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
function Bar(props) {
    const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Список задач
          </Typography>
         <Button  color="inherit">
             Добавить
         </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(Bar)
