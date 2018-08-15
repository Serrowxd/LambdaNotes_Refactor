import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
// CSS Imports
import './styles/css/index.css';
// Reset breaks everything
// import './reset.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
