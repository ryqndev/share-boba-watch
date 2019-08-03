import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

export class Statistics extends Component {
    constructor(props){
        super(props);
        this.state = {
            display: <Typography>This user does not exist</Typography>
        };
        fetch(`https://api.boba.watch/drinks/user${props.location.pathname}`)
        .then(resp => {
            if(resp.status === 200){
                return resp.json();
            }
        }).then(resp => {
            this.parse(resp);
        }).catch(err => {
            alert(err);
        });
    }
    parse = (data) => {
        let display = JSON.stringify(data);
        this.setState({
            display: display
        });
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
