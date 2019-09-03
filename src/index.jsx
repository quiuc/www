import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';
import * as serviceWorker from './serviceWorker';

import './index.css';
import './text.css';
import './main.scss';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();