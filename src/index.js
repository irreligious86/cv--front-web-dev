import React from 'react';
import ReactDOM from 'react-dom';
import state from './state.js'
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App state={state}/>
    </React.StrictMode>,
    document.getElementById('root')
);


