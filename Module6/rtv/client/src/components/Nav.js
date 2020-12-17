import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import ExitToApp from '@material-ui/icons/ExitToApp'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    typo: {
        paddingLeft: 10,
    },
}))

export default function Nav(props) {
    const classes = useStyles()

    // console.log(props.user)

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='logout'>
                        <ExitToApp onClick={props.logout}/>
                        <Typography className={classes.typo} variant='h6' color='inherit'>
                            {`Welcome to Rock the Vote, @${props.user.username}`}
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>

        </div>
    )
}