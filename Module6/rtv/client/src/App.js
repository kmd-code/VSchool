import React, { useState, useEffect, useContext } from 'react';
import LoginPage from './components/LoginPage'
import {Route, Switch, Link} from 'react-router-dom'

function App(props) {
  return (
    <Switch>
      <Route exact path='/'>
        <LoginPage />
      </Route>
      <Route path='/home'>

      </Route>
      <Route path='/'></Route>
    </Switch>
  )
}

export default App;
