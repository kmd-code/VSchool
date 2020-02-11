import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {PokeFavsProvider} from './context/PokeFavs'

ReactDOM.render(
    <PokeFavsProvider>
        <Router>
            <App />
        </Router>
    </PokeFavsProvider>, 
    document.getElementById('root')
);


