import React, { Component } from 'react';
import backend from './firebaseCalls';
import { Typography } from '@material-ui/core';
import './Statistics.css';

export class Statistics extends Component {
    constructor(props){
        super(props);
        let uid = this.props.match.params.user;
        sessionStorage.setItem('uid', uid);
        this.getUserData( uid );
        this.state = {
            display: (<Typography> Loading data... </Typography>)
        };
    }
    getUserData = ( uid ) => {
        backend.init( uid );
        backend.getStats(this.foundUser, this.didNotFindUser);
    }
    foundUser = ( data ) => {
        console.log(data);
        let pageData = (
            <Typography>
                {data.fn}'s boba watch profile
                <br />
                Average cost of a drink: {data.ad / 100}
                <br />
                Total spent this month: {data.tc}
                <br />
                # of drinks this month: {data.td}
            </Typography>
        );
        this.setState({
            display: pageData
        });
    }
    didNotFindUser = ( data ) => {
        let pageData = (
            <div className="notice-container">
                <Typography variant="subtitle1">
                    This person either doesn't exist or has their profile set to private. 
                </ Typography>
                <br />
                <Typography variant="body1">
                    If this is your profile and would like to change it, please access your user settings in your Boba Watch account. You can find more information at
                    <a href="https://info.boba.watch/"> info.boba.watch </a>
                </Typography>
            </div>
        );
        this.setState({
            display: pageData
        });
    }
    render() {
        return (
        <div className="statistics-page--container">
            <div className="statistics-title--holder" onClick={() => {window.location = 'https://boba.watch/'} }>
                <div className="statistics-title--logo"></div>
                <Typography variant="h1">boba watch</Typography>
            </div>
            {this.state.display}
        </div>
        )
    }
}

export default Statistics;
