import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import './Statistics.css';

export class Index extends Component {
  render() {
    return (
        <div className="statistics-page--container">
            <div className="statistics-title--holder" onClick={() => {window.location = 'https://boba.watch/'} }>
                <div className="statistics-title--logo"></div>
                <Typography variant="h1">boba watch</Typography>
            </div>
            <div className="notice-container">
                <Typography variant="subtitle1">
                    Share your boba watch profile with your friends!
                </Typography>
                <br />
                <Typography variant="body1">
                    Start keeping track of your finances now. Login with your Facebook account and get started <a href="https://boba.watch"> here.</a>
                    <br />
                    <br />
                    To view someone else's profile, visit their unique share link found on their profile. Find out how here: <a href="https://info.boba.watch">FAQ page</a>
                </Typography>
            </div>
        </div>
    )
  }
}

export default Index
