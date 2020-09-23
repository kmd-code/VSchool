import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {UserContextProvider} from './components/context/userContext'
import {IssueContextProvider} from './components/context/issueContext'
import {BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
    <UserContextProvider>
      <IssueContextProvider>
        <Router>
          <App />
        </Router>
      </IssueContextProvider>
    </UserContextProvider>,
  document.getElementById('root')
);

