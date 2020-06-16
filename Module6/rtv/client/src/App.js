import React, { useState, useEffect, useContext } from 'react';
import LoginPage from './components/Auth/LoginPage'
import {Route, Switch, Link} from 'react-router-dom'
import {UserContext} from './components/context/userContext'

function App(props) {
  const {token, logout} = useContext(UserContext)
  return (
    <LoginPage />
  )
}

export default App;
