import React, { useState } from 'react'
import { Drawer, List, IconButton, ListItem, ListItemText } from '@mui/material/'
import logo from '../assests/logo.png'
import facebookIcon from '../assests/facebook-icon.png'
import instagramIcon from '../assests/instagram-icon.png'
import gmailIcon from '../assests/gmail-icon.png'


const Sidebar = () => {
    
  const [open, setOpen] = useState(false);

    return(
        <div>
            <Drawer
                variant="permanent"
                open={open}
                anchor={"left"}
                onClose={() => setOpen(false)}
            >
                <IconButton aria-label="Madeleine Images">
                    <img src={ logo } alt="Madeleine Images Logo"/>
                </IconButton>

                <List component="nav" aria-label="navigation sidebar">
                    <ListItem button>
                    <ListItemText>home</ListItemText>
                    </ListItem>
                    
                    <ListItem button>
                    <ListItemText>about</ListItemText>
                    </ListItem>

                    <ListItem button>
                    <ListItemText>athletics</ListItemText>
                    </ListItem>

                    <ListItem button>
                    <ListItemText>headshots</ListItemText>
                    </ListItem>

                    <ListItem button>
                    <ListItemText>seniors</ListItemText>
                    </ListItem>

                    <ListItem button>
                    <ListItemText>boudoir</ListItemText>
                    </ListItem>
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
        </div>
    );
}

export default Sidebar;