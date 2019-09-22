import React, { Component } from 'react';
import backend from './firebaseCalls';
import { Typography } from '@material-ui/core';
import DailyHeatMap from './DailyHeatMap';
import './Statistics.css';

export class Statistics extends Component {
    constructor(props){
        super(props);
        let uid = this.props.match.params.user;
        sessionStorage.setItem('uid', uid);
        this.getUserData( uid );
        this.state = {
            display: (
                <div className="statistics-content--in-progress">
                    <Typography variant="h3"> Loading data... </Typography>
                </div>
            )
        };
    }
    getUserData = ( uid ) => {
        backend.init( uid );
        backend.getStats(this.foundUser, this.didNotFindUser);
    }
    foundUser = ( data ) => {
        console.log(data);
        let pageData = (
            <div className="statistics-content--holder">
                <Typography variant="h2">
                    {data.fn}'s stats
                </Typography>
                <br />
                <Typography variant="h3">
                    ...in a nutshell
                </Typography>
                <br />
                <Typography variant="subtitle1" component="p">
                    Drink Average: <span>${data.ad / 100}</span>
                </Typography>
                <Typography variant="subtitle1" component="p">
                    Monthly Total: <span>${data.tc / 100}</span>
                </Typography>
                <Typography variant="subtitle1" component="p">
                    Drinks this month: <span>{data.td}</span>
                </Typography>
                <br />
                <br />
                <DailyHeatMap data={JSON.parse(data.d)} width={window.innerWidth >= 800 ? 800 : window.innerWidth}/>
            </div>
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
                    <a href="https://info.boba.watch/"> our FAQ page </a>
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
