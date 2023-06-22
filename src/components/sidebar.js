import React, { useState } from 'react'
import { Drawer, List, IconButton, ListItemButton, ListItemText } from '@mui/material/'
import logo from '../assests/logo.png'
import facebookIcon from '../assests/facebook-icon.png'
import instagramIcon from '../assests/instagram-icon.png'
import gmailIcon from '../assests/gmail-icon.png'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelected] = useState(0);

    return(
        <Drawer
            variant="permanent"
            open={open}
            anchor={"left"}
            onClose={() => setOpen(false)}
            style={{height:'100vh', left: '0', width: '500px'}}
        >
            <IconButton aria-label="Madeleine Images">
                <img src={ logo } alt="Madeleine Images Logo"/>
            </IconButton>

            <List component="nav" aria-label="navigation sidebar">
                <Link to='/'>
                <ListItemButton selected={selectedIndex === 0} onClick={() => setSelected(0)}>
                <ListItemText primary={"home"} />
                </ListItemButton>
                </Link>

                <Link to='/about'>
                <ListItemButton selected={selectedIndex === 1} onClick={() => setSelected(1)}>
                <ListItemText primary={"about"} />
                </ListItemButton>
                </Link>

                <Link to='/athletics'>
                <ListItemButton selected={selectedIndex === 2} onClick={() => setSelected(2)}>
                <ListItemText primary={"athletics"} />
                </ListItemButton>
                </Link>

                <Link to='/headshots'>
                <ListItemButton selected={selectedIndex === 3} onClick={() => setSelected(3)}>
                <ListItemText primary={"headshots"} />
                </ListItemButton>
                </Link>

                <Link to='/seniors'>
                <ListItemButton selected={selectedIndex === 4} onClick={() => setSelected(4)}>
                <ListItemText primary={"seniors"} />
                </ListItemButton>
                </Link>

                <Link to='/boudoir'>
                <ListItemButton selected={selectedIndex === 5} onClick={() => setSelected(5)}>
                <ListItemText primary={"boudoir"} />
                </ListItemButton>
                </Link>
            </List>
            <p>
                Madeleine Images<br/>
                (304) 620-1385<br/>
                madeleineimages@gmail.com
            </p>
            <div>
                <IconButton href="https://www.facebook.com/MaddyJphotography" target="_blank"><img src={facebookIcon} alt="facebook icon" /></IconButton>
                <IconButton href="https://www.instagram.com/madeleineimages/" target="_blank"><img src={instagramIcon} alt="instagram icon" /></IconButton>
                <IconButton href="mailto:madeleineimages@gmail.com?subject=Mail from Our Site" target="_blank"><img src={gmailIcon} alt="gmail icon" /></IconButton>
            </div>
            <p>
                &#169; 2023 Madeleine Images
            </p>
        </Drawer>
    );
}

export default Sidebar;