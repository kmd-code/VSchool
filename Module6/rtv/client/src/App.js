import React, { useContext } from 'react';
import Auth from './components/Auth'
import {Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/Auth/ProtectedRoute'
import {UserContext} from './components/context/userContext'
import Nav from './components/Nav'
import Issues from './components/Issues'

function App(props) {
  const {token, logout} = useContext(UserContext)
  return (
    <div className='app'>
      { token && <Nav logout={logout} />}
        <Switch>
          <Route 
            exact path="/"
            render={() => token ? <Redirect to='/issues'/> : <Auth />}
          />
          <ProtectedRoute 
            path='/issues'
            component={Issues}
            redirectTo='/'
            token={token}
          />
        </Switch> 
    </div>
  )
}

export default App;
