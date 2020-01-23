import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import * as serviceWorker from './serviceWorker';

import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyDMrdbYo2DMqtPyJUQdZO9Ho_vs4791CnQ",
    authDomain: "cibicletas.firebaseapp.com",
    databaseURL: "https://cibicletas.firebaseio.com",
    projectId: "cibicletas",
    storageBucket: "cibicletas.appspot.com",
    messagingSenderId: "822619317907",
    appId: "1:822619317907:web:f97fcc36140a4e77cccf66",
    measurementId: "G-9KG1691M2N"
});

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your Main to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
