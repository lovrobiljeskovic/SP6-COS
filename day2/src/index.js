import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import App2 from './App2';
//import Clock from './Clock';
import Toggle from './Toggle';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<Toggle/>, document.getElementById('root'));

//ReactDOM.render(<Clock txt="My shitty clock" sleepTime={3000}/>, document.getElementById('root'));
registerServiceWorker();
