

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const navItems = [
  { label: 'Home', link: '/Portfolio.page' },         // Define the external link for Home
  { label: 'About', link: '/about' }  // Define the external link for About
  //{ label: 'Contact', link: '/contact' }, // Define the external link for Contact
];

export const MyNavbar: React.FC<{}> = () => {
  // ...

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
           color='info'
            aria-label="open drawer"
            edge="start"
           // onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <h1>PORTFOLIO</h1>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.label} sx={{ color: '#fff' }} >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {/* ... */}
    </Box>
  );
}




