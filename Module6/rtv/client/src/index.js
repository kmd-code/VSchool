import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {UserContextProvider} from './components/context/userContext'
import {BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
    <UserContextProvider>
        <Router>
          <App />
        </Router>
    </UserContextProvider>,
  document.getElementById('root')
);

