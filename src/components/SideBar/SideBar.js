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
function SideBar({classes}) {
    
  return (
     <MyContext.Consumer>
     {({importance,addTodo,isSideOpen,setIsSideOpen,initTodo})=>(
          <Drawer anchor="right"
                  open={isSideOpen}
                  onClose={()=>setIsSideOpen(false)}>
                  <Typography component="h2" variant="h2" className = {classes.header}>
                      Добавить задачу
                  </Typography>
                <Divider/>
                    <SideForm importance={importance} addTodo ={addTodo} setIsSideOpen={setIsSideOpen}  initTodo= {initTodo} />
          </Drawer>
         
      )}
    </MyContext.Consumer>
  )
}

export default withStyles(styles)(SideBar)
