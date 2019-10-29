import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebaseConfig = Object.freeze({
    apiKey: 'AIzaSyCIbBzXnDAeMVatbB_XnIFtR-lzVjP354o',
    authDomain: 'mo-wedding-webapp.firebaseapp.com',
    databaseURL: 'https://mo-wedding-webapp.firebaseio.com',
    projectId: 'mo-wedding-webapp',
    storageBucket: '',
    messagingSenderId: '250217484539',
    appId: '1:250217484539:web:9793d8f565c1720f86205e',
});

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
