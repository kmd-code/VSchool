import React, { useContext } from 'react';
import Auth from './components/Auth'
// import {Route, Switch, Link} from 'react-router-dom'
import {UserContext} from './components/context/userContext'

function App(props) {
  const {token, logout} = useContext(UserContext)
  return (
    <Auth />
  )
}

export default App;
