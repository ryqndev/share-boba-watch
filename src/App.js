import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from './components/Index';
import Statistics from './components/Statistics';
import './App.css';

class App extends Component {
    componentDidCatch = () => {
        window.location.reload(true); 
    }
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route path="/:user" component={Statistics}/>
            </Switch>
        );
    }
}

export default App;
