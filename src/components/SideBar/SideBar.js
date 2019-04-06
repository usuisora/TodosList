import React from 'react'
import {Button,Typography, Drawer} from '@material-ui/core'


function SideBar({isSideOpen,setIsSideOpen}) {
    
  return (
    <Drawer anchor="right"
            open={isSideOpen} 
            onClose={()=>setIsSideOpen(false)}>
        dsfdsfhs
    </Drawer>
  )
}

export default SideBar
