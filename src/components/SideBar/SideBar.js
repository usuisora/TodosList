import React from 'react'
import {Typography, Drawer,AppBar,Toolbar, Divider} from '@material-ui/core'
import SideForm from './SideForm'
import { withStyles } from '@material-ui/core/styles';
import {MyContext} from '../../Provider'
const styles = theme => ({
  header: {
   position: 'relative',
   textAlign: 'center',
   padding:'20px',
   marginLeft: 'auto',
   marginRight: 'auto',
  },
  grow:{
    display: 'flex',
    minWidth: 400
  }
});


function SideBar({classes}) {
  
  return (
     <MyContext.Consumer>
     {({importance,addTodo,isSideOpen,setIsSideOpen,initTodo,setInitTodo, setOpenSnack})=>(
          <Drawer anchor="right" style = {{minWidth : '50%'}}
                  open={isSideOpen}
                  onClose={()=>{
                    {/* console.log(initTodo) */}
                    if(initTodo.name == null)
                    {
                      {/* setOpenSnack(false) */}
                      setIsSideOpen(false)
                    }
                    else{
                      setOpenSnack(true)
                    }
                    setInitTodo({})
                  }}>
                   <AppBar position="static">
                    <Toolbar>
                      <Typography variant="h6" color="inherit" className={classes.grow}>
                        Добавить
                      </Typography>
                    </Toolbar>
                 </AppBar>

                  <Divider/>
      
                  <SideForm  setInitTodo ={setInitTodo}  importance={importance} addTodo ={addTodo} setIsSideOpen={setIsSideOpen}  initTodo= {initTodo} />
                
                  </Drawer>
         
      )}
    </MyContext.Consumer>
  )
}

export default withStyles(styles)(SideBar)
