import React from 'react'
import {Typography, Drawer,AppBar,Toolbar, Divider} from '@material-ui/core'
import SideForm from './SideForm'
import { withStyles } from '@material-ui/core/styles';
import {MyContext} from '../../Provider'
const styles = theme => ({

  grow:{
    display: 'flex',
    minWidth: 400
  }
});



function SideBar() {
  
  return (
     <MyContext.Consumer>
     {({importance,addTodo,isSideOpen,setIsSideOpen,initTodo,setInitTodo, setOpenSnack, deleteTodo, setMsg})=>(
          <Drawer anchor="right" style = {{minWidth : '50%'}}
                  open={isSideOpen}
                  onClose={()=>{
                  if(initTodo.name == null)  

                      setIsSideOpen(false)
                      else
                        setMsg('Нажмите ОТМЕНА, чтобы выйти  без сохранения')
                         setOpenSnack(true)
                    
                    setInitTodo({date: new Date().toISOString().substring(0,10)})
                  }}>
                   <AppBar position="static">
                    <Toolbar>
                      <Typography variant="h6" color="inherit" style  = {{   display: 'flex',minWidth: 320}}>
                        Добавить
                      </Typography>
                    </Toolbar>
                 </AppBar>

                  <Divider/>
      
                  <SideForm  setInitTodo ={setInitTodo}  importance={importance} addTodo ={addTodo} setMsg={setMsg} deleteTodo = {deleteTodo}
                  setIsSideOpen={setIsSideOpen}  initTodo= {initTodo} setOpenSnack={setOpenSnack}/>
                
                  </Drawer>
         
      )}
    </MyContext.Consumer>
  )
}

export default SideBar
