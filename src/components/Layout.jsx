import React from 'react'
import Drawer from '@mui/material/Drawer';
import { Typography,Box } from '@mui/material';

const drawerWidth=240;

const Layout = ({children}) => {
  return (
    <Box sx={{display:"flex"}}>
        {/* app bar */}

        {/* Side Bar */}
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography variant='h5'>Genius Notes</Typography>
      </Drawer>

        <Box sx={{width:"100%",backgroundColor:"#f9f9f9"}}>
            {children}
        </Box>
    
    </Box>
  )
}

export default Layout