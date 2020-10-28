import React, { useContext } from 'react';
import Auth from './components/Auth'
import {Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/Auth/ProtectedRoute'
import {UserContext} from './components/context/userContext'
import Nav from './components/Nav'
import Home from './components/Home'

function App() {
  const {token, logout, user} = useContext(UserContext)
  return (
    <div className='app'>
      { token && 
      <Nav user={user} logout={logout} />}
        <Switch>
          <Route 
            exact path="/"
            render={() => token ? <Redirect to='/home'/> : <Auth />}
          />
          <ProtectedRoute 
            path='/home'
            component={Home}
            redirectTo='/'
            token={token}
          />
        </Switch> 
    </div>
  )
}

export default App;
