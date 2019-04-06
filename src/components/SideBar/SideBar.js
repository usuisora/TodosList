import React from 'react'
import {Button,Typography, Drawer, Divider} from '@material-ui/core'
import SideForm from './SideForm'

function SideBar({isSideOpen,setIsSideOpen}) {
    
  return (
    <Drawer anchor="right"
            open={isSideOpen} 
            onClose={()=>setIsSideOpen(false)}>
            <Typography component="h2" variant="h2" gutterBottom style={{margin:20, color: '#333' }}>
                Добавить задачу
            </Typography>
           <Divider/>
           <SideForm />
           <Divider/>
           <Button >Save</Button>
           <Button>Cancel</Button>
    </Drawer>
  )
}

export default SideBar
