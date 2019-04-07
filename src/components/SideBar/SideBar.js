import React,{useState} from 'react'
import {Typography, Drawer, Divider} from '@material-ui/core'
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
  const [openSnack, setOpenSnack] = useState(false);
  
  return (
     <MyContext.Consumer>
     {({importance,addTodo,isSideOpen,setIsSideOpen,initTodo})=>(
          <Drawer anchor="right"
                  open={isSideOpen}
                  onClose={()=>{
                     setOpenSnack(true)
                  }}>

                  <Typography component="h2" variant="h2" className = {classes.header}>
                      Добавить задачу
                  </Typography>
                
                  <Divider/>
                
                  <SideForm importance={importance} addTodo ={addTodo} setIsSideOpen={setIsSideOpen}  initTodo= {initTodo} />
                
                  <Alert openSnack = {openSnack} setOpenSnack={setOpenSnack}/>
          </Drawer>
         
      )}
    </MyContext.Consumer>
  )
}

export default withStyles(styles)(SideBar)
