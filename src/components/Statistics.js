import React, { Component } from 'react';
import backend from './firebaseCalls';
import { Typography } from '@material-ui/core';

export class Statistics extends Component {
    constructor(props){
        super(props);
        let uid = this.props.match.params.user;
        sessionStorage.setItem('uid', uid);
        this.getUserData( uid );
        this.state = {
            display: this.setUserData()
        };
    }
    getUserData = ( uid ) => {
        backend.init( uid );
        backend.getStats(() => {return;});
    }
    setUserData = () => {
        return <Typography> User doesn't exist </Typography>
    }
    render() {
        return (
        <div>
            {this.state.display}
        </div>
        )
    }
}

export default Statistics;
