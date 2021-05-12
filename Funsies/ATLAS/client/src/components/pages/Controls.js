import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Switch, Link, Route, useRouteMatch, useHistory } from 'react-router-dom'
import PrivateRoute from '../auth/PrivateRoute'
import { useAuth } from '../context/AuthContext'
import { store } from '../../firebase'
import { AddJob } from '../Functions/FireStore'
import Nav from './Nav'
import myStyles from '../styles/styles'

import Jobs from './Jobs'
import Dashboard from './Dashboard'
import FollowUp from './FollowUp'
import Interviews from './Interviews'
import Profile from './Profile'
import Documents from './Documents'

import { Toolbar } from '@material-ui/core'



export default function Controls(props) {
    const classes = myStyles()

    const [loading, setLoading] = useState(false)
    
    const { logout, currentUser } = useAuth()

    useEffect(() => {
        const unsubscribe = store.collection('Jobs').onSnapshot((query) => {
            setLoading(true)
            const items = []
            query.forEach((doc) => {
                items.push(doc.data())
            })
            setLoading(false)
        })
        return unsubscribe
    },[])

    function handleLogout(e){
        e.preventDefault()
        logout()
    }

    return (
        
        <div className={classes.root}>
            <Nav handleLogout={handleLogout}/>
        <main className={classes.content}>
            <Toolbar />
            { !loading && <Switch>
                <Route path='/home/dashboard' component={Dashboard}/>
                <Route path='/home/jobs' component={Jobs}/>
                <Route path='/home/interviews' component={Interviews}/>
                <Route path='/home/followup' component={FollowUp}/>
                <Route path='/home/profile' component={Profile}/>
                <Route path='/home/documents' component={Documents}/>
            </Switch> }
        </main>
        </div>
    )
}
