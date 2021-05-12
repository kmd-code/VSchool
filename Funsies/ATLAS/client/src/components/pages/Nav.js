import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import myStyles from '../styles/styles'

import { 
    CssBaseline, 
    Typography, 
    AppBar, 
    Toolbar, 
    Drawer, 
    Divider, 
    MenuList, 
    MenuItem
} from '@material-ui/core'


export default function Nav({handleLogout}) {
    const classes = myStyles()
    const history = useHistory()
    const path = history.location.pathname

    return (
        <>
            <CssBaseline />
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                    <Typography variant='h6'>ATLAS</Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant='permanent'
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                <MenuList>
                    <MenuItem 
                        selected={'/home/dashboard' === path} 
                        component={Link} 
                        to={`/home/dashboard`}
                    >
                        Dashboard
                    </MenuItem>
                </MenuList>
                <Divider />
                <MenuList>
                    <MenuItem 
                        selected={'/home/jobs' === path} 
                        component={Link} 
                        to={`/home/jobs`}
                    >
                        Jobs
                    </MenuItem>
                    <MenuItem
                        selected={'/home/interviews' === path}
                        component={Link}
                        to={'/home/interviews'}
                    >
                        Interviews
                    </MenuItem>
                    <MenuItem
                        selected={'/home/followup' === path}
                        component={Link}
                        to={'/home/followup'}
                    >
                        Follow-Up
                    </MenuItem>
                </MenuList>
                <Divider />
                <MenuList>
                    <MenuItem
                        selected={'/home/profile' === path}
                        component={Link}
                        to={'/home/profile'}
                    >
                        Profile
                    </MenuItem>
                    <MenuItem
                        selected={'/home/documents' === path}
                        component={Link}
                        to={'/home/documents'}
                    >
                        Documents
                    </MenuItem>
                    <MenuItem button onClick={handleLogout}>
                        Logout
                    </MenuItem>
                </MenuList>
                </div>
            </Drawer>
        </>
    )
}
