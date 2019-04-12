import React,{useState} from 'react'
import {Typography, Drawer,AppBar,Toolbar, Divider} from '@material-ui/core'
import SideForm from './SideForm'
import { withStyles } from '@material-ui/core/styles';
import {MyContext} from '../../Provider'
import Alert from '../Alert'
const styles = theme => ({
  header: {
   position: 'relative',
   textAlign: 'center',
   padding:'20px',
   marginLeft: 'auto',
   marginRight: 'auto',
  }
});


function SideBar({classes}) {
  // const [openSnack, setOpenSnack] = useState(false);
  
  return (
     <MyContext.Consumer>
     {({importance,addTodo,isSideOpen,setIsSideOpen,initTodo,openSnack, setOpenSnack})=>(
          <Drawer anchor="right"
                  open={isSideOpen}
                  onClose={()=>{
                     setOpenSnack(true)
                  }}>

                  {/* <Typography align = 'center' variant="h6" color="" className={classes.grow}>
                     Добавить задачу
                   </Typography> */}

                   <AppBar position="static">
                    <Toolbar>
                      <Typography variant="h6" color="inherit" className={classes.grow}>
                        Добавить
                      </Typography>
                    </Toolbar>
                 </AppBar>

                  <Divider/>
                
                  <SideForm openSnack = {openSnack} setOpenSnack={setOpenSnack} importance={importance} addTodo ={addTodo} setIsSideOpen={setIsSideOpen}  initTodo= {initTodo} />
                
                  </Drawer>
         
      )}
    </MyContext.Consumer>
  )
}

export default withStyles(styles)(SideBar)
