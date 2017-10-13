import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import JokeFacade from './JokeFacade';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App facade = {JokeFacade}/>, document.getElementById('root'));
registerServiceWorker();
