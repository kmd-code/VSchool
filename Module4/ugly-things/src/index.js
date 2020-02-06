import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {UglyThingsProvider} from './UglyContext'
import './index.css'


ReactDOM.render(
    <UglyThingsProvider>
        <App />
    </UglyThingsProvider>, 
    document.getElementById('root')
);


