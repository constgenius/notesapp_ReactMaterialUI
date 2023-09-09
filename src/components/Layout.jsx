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
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/styles';
import format from 'date-fns/format';
import Avatar from '@mui/material/Avatar';

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
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex" }}>
      {/* app bar */}
      <AppBar position='fixed' elevation={0} sx={{ width: `calc(100% - ${drawerWidth}px)`, marginLeft: `${drawerWidth}` }}>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>Today is the {format(new Date(), 'd MMMM Y')}</Typography>
          <Typography>const</Typography>
          <Avatar alt="Groot" src="/groot.jpg" sx={{ ml: 2 }} />
        </Toolbar>
      </AppBar>

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
        <Typography variant='h5' sx={{ p: 2, color: "primary.main" }}>Genius Notes</Typography>


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

      <Box sx={{ width: "100%", backgroundColor: "#f9f9f9", flexGrow: 1, marginTop: `${theme.mixins.toolbar.minHeight}px`, padding: 3 }}>
        {children}
      </Box>

    </Box>
  );
}

export default Layout