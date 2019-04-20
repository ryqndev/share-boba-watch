import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Index from './components/Index';
import Statistics from './components/Statistics';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Index}/>
                <Route path="/:user" component={Statistics}/>
            </Router>
        );
    }
}

export default App;
