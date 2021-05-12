import React, { useState } from 'react'
import Login from './auth/Login'
import Signup from './auth/Signup'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './auth/PrivateRoute'
import Controls from './pages/Controls'

function App() {

  const [error, setError] = useState('')
  
  const value = {
    error,
    setError
  }


  return (
      <AuthProvider>
        <Router>
        <Switch>        
          <Route path='/signup'>
            <Signup />  
          </Route>        
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/home' component={Controls} />  
        </Switch> 
        </Router>
      </AuthProvider>
  )
}

export default App;
