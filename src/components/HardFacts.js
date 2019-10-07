import React, { Component } from 'react';
import {Typography} from '@material-ui/core';
/**
 * @params {number} ctd - complete total drinks
 * @about this component is called hard facts because of the
 * brutal, brutal truth you boba bingers will have to face
 * when you guys realize what you're putting in your bodies
 */
export class HardFacts extends Component {
    round = (number) => {
        return parseFloat((number)).toFixed(3);
    }
    render() {
        return (
            <div>
                <Typography variant="h2">
                    Hard Facts
                </Typography>
                <Typography variant="body1">
                <br />
                Since you've started recording your drinks, you have had {this.props.data} drink(s).
                <br />
                Assuming each drink is an average (in America atleast) size of boba milk tea with regular sweetness.
                <br />
                [ 300 calories / 36g sugar / 16 oz ]
                <br />
                </Typography>
                <br />
                <br />
                <Typography variant="h3" component="p">
                    You have consumed:
                </Typography>
                <br />
                <Typography variant="subtitle1" component="p">
                    <span>{this.round(this.props.data * 0.473176)} liters</span> ({this.round(this.props.data * 0.125)} gallons) of milk tea.
                </Typography>
                <Typography variant="subtitle1" component="p">
                    <span>{this.round(this.props.data * 0.036)} kilograms</span> of sugar ({this.round(this.props.data * 0.0793)} pounds).
                </Typography>
                <Typography variant="subtitle1" component="p">
                    <span>{this.props.data * 300}</span> calories.
                </Typography>
            </div>
        )
    }
}

export default HardFacts;
