import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import WhereToVote from '@material-ui/icons/WhereToVote';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AuthForm(props) {

    const { 
        handleSignup,
        handleLogin, 
        handleChange, 
        errMsg
    } = props

    const classes = useStyles();

    const [toggleForm, setToggleForm] = useState(false)

    function toggle() {
        setToggleForm(prevState => !prevState)
    }

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <WhereToVote />
            </Avatar>
            <Typography component="h1" variant="h5">
            {toggleForm ? "Create New Account" : "Sign In"}
            </Typography>
            <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Username"
                name="username"
                autoFocus
                onChange={handleChange}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleChange}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => toggleForm ? handleSignup() : handleLogin()}
            >
                {toggleForm ? "New Account" : "Sign In"}
            </Button>
            <Grid container>
                <Grid item xs>
                    {errMsg}
                </Grid>
                <Grid item>
                <Link onClick={toggle} variant="body2">
                    {toggleForm ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        </Container>
    );
}