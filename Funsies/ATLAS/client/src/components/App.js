import React, { useState } from 'react'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Dashboard from './Dashboard'

function App() {

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const value = {
    error,
    loading,
    setError,
    setLoading
  }
  

  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path='/' render={(props) => (
            <Dashboard {...props} value={value}/>
          )} />
          <Route path='/signup' render={(props) => (
            <Signup {...props} value={value}/>
          )}/>
          <Route path='/login' render={(props) => (
            <Login {...props} value={value}/>
          )} />
        </Switch> 
      </AuthProvider>
    </Router>
  )
}

export default App;
