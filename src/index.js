import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import theme from './theme';
import { MuiThemeProvider } from '@material-ui/core';
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


ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Router basename={process.env.PUBLIC_URL} >
            <App />
        </Router>
    </MuiThemeProvider>, document.getElementById('root'));
serviceWorker.unregister();
