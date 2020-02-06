import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'

function Header(props) {
    return (
        <div>
        <nav>
            <h2>Welcome, {props.user}</h2>
            <div className="links">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/services'>Services</Link>
            </div>
        </nav>

            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/services"><Services /></Route>
            </Switch>
        </div>
    )
}

export default Header