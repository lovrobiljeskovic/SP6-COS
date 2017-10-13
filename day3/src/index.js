import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Calculator from './Calculator';
import ListDemo from './ListDemo';
import Reservation from './Reservation';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Reservation />, document.getElementById('root'));
registerServiceWorker();
