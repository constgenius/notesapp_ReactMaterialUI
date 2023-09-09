import React from 'react'
import Drawer from '@mui/material/Drawer';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SubjectOutlined, AddCircleOutlineOutlined } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 240;
const menuItems = [
  {
    text: 'My Notes',
    icon: <SubjectOutlined color="secondary" />,
    path: '/'
  },
  {
    text: 'Create Note',
    icon: <AddCircleOutlineOutlined color="secondary" />,
    path: '/create'
  },
];


const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box sx={{ display: "flex" }}>
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
        <Typography variant='h5' sx={{ p: 3 }}>Genius Notes</Typography>


        {/* Lists and List Items */}
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding
              onClick={() => navigate(item.path)}
              sx={{ ...(location.pathname === item.path ? { backgroundColor: "#f9f9f9" } : null) }}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>


      </Drawer>

      <Box sx={{ width: "100%", backgroundColor: "#f9f9f9" }}>
        {children}
      </Box>

    </Box>
  );
}

export default Layout