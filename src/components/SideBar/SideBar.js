import React from 'react'
import {Typography, Drawer, Divider} from '@material-ui/core'
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
  }
});
function SideBar({isSideOpen,setIsSideOpen,classes}) {
    
  return (
    <Drawer anchor="right"
            open={isSideOpen} 
            onClose={()=>setIsSideOpen(false)}>
            <Typography component="h2" variant="h2" className = {classes.header}>
                Добавить задачу
            </Typography>
           <Divider/>
           <MyContext.Consumer>
             {({importance,addTodo})=>(
              <SideForm importance={importance} addTodo ={addTodo} setIsSideOpen={setIsSideOpen} />
             )}
           </MyContext.Consumer>
    </Drawer>
  )
}

export default withStyles(styles)(SideBar)
