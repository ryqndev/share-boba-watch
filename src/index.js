import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase/app';

let firebaseConfig = {
    apiKey: "AIzaSyBePNJQYVteyh1Ll9fqnXbXc-S8fmJlbTQ",
    authDomain: "boba-watch-firebase.firebaseapp.com",
    databaseURL: "https://boba-watch-firebase.firebaseio.com",
    projectId: "boba-watch-firebase",
    storageBucket: "",
    messagingSenderId: "674375234614",
    appId: "1:674375234614:web:fdaf98c291204b9c"
};
firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
