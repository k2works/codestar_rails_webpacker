import React from 'react';
import ReactDOM from 'react-dom';
import '../app/src/index.css';
import App from '../app/src/App';
import * as serviceWorker from '../app/src/serviceWorker';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();